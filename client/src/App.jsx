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
import { Toaster } from 'react-hot-toast';

// ✅ Needed for themed toasts
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { toastTheme } from "./utils/toastStyles";

import './App.css';

function App() {
  // ✅ Grab current theme (light/dark)
  const { theme } = useContext(ThemeContext);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />

          {/* ✅ Themed toaster—now works correctly */}
          <Toaster
            position="top-right"
            gutter={12}
            toastOptions={toastTheme(theme)}
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
