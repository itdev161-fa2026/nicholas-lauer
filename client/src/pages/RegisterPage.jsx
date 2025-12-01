import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Register from '../components/Register';
import toast, { Toaster } from 'react-hot-toast';
import './AuthPages.css';

const RegisterPage = () => {
  const { register, user, error } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleRegister = async (name, email, password) => {
    try {
    const result = await register(name, email, password);
    
    if (result.success) {
      toast.success('Registered successfully!');
      navigate('/login');
    } else {
      toast.error(result.message || 'Registration failed. Please try again.');
    }
  } catch (err) {
    toast.error('Registration failed. Please try again.');
    console.error(err);
  }
  };

  return (
    <div className="auth-page">
      <div className="container">
        <Register onRegister={handleRegister} error={error} />
        <div className="auth-switch">
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;