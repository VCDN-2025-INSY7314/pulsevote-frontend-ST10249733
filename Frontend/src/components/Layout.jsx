import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" style={{ margin: '0 10px' }}>Dashboard</Link>
            <button
              onClick={handleLogout}
              style={{
                margin: '0 10px',
                background: 'none',
                border: 'none',
                color: 'blue',
                cursor: 'pointer',
                textDecoration: 'underline',
                padding: 0,
                font: 'inherit'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" style={{ margin: '0 10px' }}>Register</Link>
            <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
          </>
        )}
      </nav>
      <hr />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
