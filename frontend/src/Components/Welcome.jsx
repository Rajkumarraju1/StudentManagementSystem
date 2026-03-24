import { Link } from "react-router-dom"

const Welcome = () => {
    return (
        <div className="animate-fade" style={{ 
            textAlign: 'center', 
            padding: '5rem 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
        }}>
            <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>
                Manage Students <br />
                <span style={{ 
                    background: 'linear-gradient(to right, var(--primary), var(--secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>With Precision.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
                A modern, intuitive platform for managing student records, 
                designations, and academic performance with ease.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <Link to="/allStudent" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                    View Records
                </Link>
                <Link to="/addStudent" className="btn" style={{ 
                    padding: '1rem 2rem', 
                    fontSize: '1.1rem',
                    background: 'transparent',
                    border: '2px solid var(--primary)',
                    color: 'var(--primary)'
                }}>
                    Register New
                </Link>
            </div>
        </div>
    )
}

export default Welcome;