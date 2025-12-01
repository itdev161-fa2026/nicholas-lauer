import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authProvider.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />

          <Toaster        
          position="top-right"
          toastOptions={{
            // Default options for all toasts
            style: {
              borderRadius: '12px',
              padding: '16px',
              color: '#fff',
              fontWeight: 500,
              fontSize: '14px',
            },
            success: {
              duration: 4000,
              style: {
                background: '#22c55e', // green
              },
            },
            error: {
              duration: 5000,
              style: {
                background: '#ef4444', // red
              },
            },
            loading: {
              style: {
                background: '#2563eb', // blue
                color: '#fff',
              },
            },
          }}
          />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/posts/create"
              element={
                <ProtectedRoute>
                  <CreatePost />
                </ProtectedRoute>
              }
              />
              <Route
                path="/posts/:id/edit"
                element={
                  <ProtectedRoute>
                    <EditPost />
                  </ProtectedRoute>
                }
                />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
