import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'sticky',
      top: '20px',
      margin: '20px 20px 0',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <Link to="/" style={{ 
        fontSize: '1.5rem', 
        fontWeight: '700', 
        color: 'var(--primary)', 
        textDecoration: 'none',
        fontFamily: 'Outfit'
      }}>
        StudentHub
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/allStudent" className="nav-link">Students</Link>
        <Link to="/addStudent" className="btn" style={{ padding: '0.5rem 1rem' }}>Add New</Link>
      </div>

      <style>{`
        .nav-link {
          text-decoration: none;
          color: var(--text-muted);
          font-weight: 500;
          transition: var(--transition);
        }
        .nav-link:hover {
          color: var(--primary);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
