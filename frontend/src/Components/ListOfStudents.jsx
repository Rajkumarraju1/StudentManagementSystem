import { useEffect, useState } from "react"
import { getStudent, deleteStudent } from "./Servers"
import { useNavigate } from "react-router-dom";

const ListOfStudent = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    const fetchStudents = () => {
        getStudent()
            .then(res => setStudents(res.data))
            .catch(err => alert("Error fetching students: " + err.message));
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            deleteStudent(id)
                .then(() => {
                    alert("Student deleted successfully");
                    fetchStudents();
                })
                .catch(err => alert("Error deleting student: " + err.message));
        }
    }

    return (
        <div className="container animate-fade">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2>Student Records</h2>
                <button onClick={() => navigate("/addStudent")} className="btn">Add Student</button>
            </div>

            <div className="glass table-container" style={{ padding: '1rem' }}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Section</th>
                            <th>Designation</th>
                            <th style={{ textAlign: 'center' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(s => (
                            <tr key={s.id}>
                                <td style={{ fontWeight: '500' }}>{s.name}</td>
                                <td style={{ color: 'var(--text-muted)' }}>{s.email}</td>
                                <td>{s.ph_number}</td>
                                <td>{s.section}</td>
                                <td>{s.designation?.title || <span style={{ color: '#cbd5e1' }}>N/A</span>}</td>
                                <td>
                                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                                        <button onClick={() => navigate(`/addStudent/${s.id}`)} className="btn" style={{ background: '#3b82f6', padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Edit</button>
                                        <button onClick={() => handleDelete(s.id)} className="btn btn-delete" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {students.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                        No students found. Start by adding one!
                    </div>
                )}
            </div>
        </div>
    )
}

export default ListOfStudent;