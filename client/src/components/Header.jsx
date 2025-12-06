import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import toast from 'react-hot-toast';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from "./ThemeToggle";
import './Header.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-title">
          <h1>Nick's Blog Spot</h1>
        </Link>

        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>

          {user ? (
            <>
              <span className="user-welcome">Hello, {user.name || 'User'}</span>
              <button onClick={handleLogout} className="nav-button">Logout</button>
            </>
          ) : (
            <>
              <Link to="/register" className="nav-link">Register</Link>
              <Link to="/login" className="nav-link">Login</Link>
            </>
          )}


          <ThemeToggle />     {/* Slider Toggle */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
