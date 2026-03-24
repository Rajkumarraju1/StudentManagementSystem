import { useEffect, useState } from "react"
import { saveStudent, updateStudent, saveDesignation, getStudentById } from "./Servers"
import { useNavigate, useParams } from "react-router-dom";

const AddStudent = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [student, setStudent] = useState({
        name: "",
        email: "",
        section: "",
        ph_number: "",
        designation: ""
    });
    const [designation, setDesignation] = useState([]);

    useEffect(() => {
        saveDesignation()
            .then(res => {
                setDesignation(res.data);
            })
            .catch(err => alert("Error fetching designations: " + err.message));

        if (id) {
            getStudentById(id)
                .then(res => {
                    setStudent({ ...res.data, designation: res.data.designation?.id });
                })
                .catch(err => alert("Error fetching student: " + err.message));
        }
    }, [id]);

    const handelChanges = (e => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    })

    const handleSubmit = ((e) => {
        e.preventDefault();

        if (!student.designation) {
            alert("Please select a designation.");
            return;
        }

        const payload = {
            name: student.name,
            email: student.email,
            section: student.section,
            ph_number: student.ph_number,
            designation: {
                id: Number(student.designation)
            }
        }

        const action = id ? updateStudent(id, payload) : saveStudent(payload);
        
        action.then(() => {
            alert(id ? "Student updated" : "Student added");
            navigate("/allStudent");
        }).catch((err) => alert("Error: " + err.message));
    })

    return (
        <div className="container animate-fade">
            <div className="glass form-card">
                <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                    {id ? 'Update Student' : 'Register Student'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Full Name</label>
                        <input type="text" name="name" value={student.name} placeholder="e.g. John Doe" onChange={handelChanges} />
                    </div>

                    <div className="input-container">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Email Address</label>
                        <input type="email" name="email" value={student.email} placeholder="john@example.com" onChange={handelChanges} />
                    </div>

                    <div className="input-container">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Section</label>
                        <input type="text" name="section" value={student.section} placeholder="e.g. A" onChange={handelChanges} />
                    </div>

                    <div className="input-container">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Phone Number</label>
                        <input type="number" name="ph_number" value={student.ph_number} placeholder="1234567890" onChange={handelChanges} />
                    </div>

                    <div className="input-container">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Designation</label>
                        <select name="designation" value={student.designation} onChange={handelChanges}>
                            <option value="">Select a designation...</option>
                            {designation.map(d => (
                                <option key={d.id} value={d.id}>{d.title}</option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }}>
                        {id ? 'Update Record' : 'Create Record'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddStudent;