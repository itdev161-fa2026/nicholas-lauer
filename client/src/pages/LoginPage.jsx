import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Login from '../components/Login';
import toast, { Toaster } from 'react-hot-toast';
import { confirmToast, successToast, errorToast } from "../utils/toastStyles";


const LoginPage = () => {
  const { login, user, error } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async (email, password) => {
    try {
      const result = await login(email, password);
    
        if (result.success) {
          toast.success('Logged in successfully!');
        navigate('/');
        } else {
          toast.error(result.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      toast.error('Login failed. Please check your credentials and try again.');
      console.error(err);
    }
  };

return (

    <div className="auth-wrapper">
      <div className="container">
        <Login onLogin={handleLogin} error={error} />

        <div className="auth-switch">
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;