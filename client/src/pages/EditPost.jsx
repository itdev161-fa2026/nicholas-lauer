import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { getPostById, updatePost } from '../services/api';
import PostForm from '../components/PostForm';
import toast from 'react-hot-toast';
import './EditPost.css';

const EditPost = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await getPostById(id);

        // Verify user owns the post
        if (user && data.user._id !== user.id) {
          toast.error("You don't have permission to edit this post.");
          setLoading(false);
          return;
        }

        setPost(data);
        setLoading(false);
      } catch (err) {
        toast.error('Failed to load post. It may not exist or the server is down.');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, user]);

  const handleSubmit = async (title, body) => {
    try {
      setSubmitting(true);

      await updatePost(id, title, body);
      toast.success('Post updated successfully!');
      // Navigate to the updated post
      navigate(`/posts/${id}`);
    } catch (err) {
      const errorMsg =
        err.response?.data?.errors?.[0]?.msg ||
        err.response?.data?.msg ||
        'Failed to update post. Please try again.';

      toast.error(errorMsg);
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate(`/posts/${id}`);
  };

  if (loading) {
    return <div className="container loading">Loading post...</div>;
  }

  if (!post) {
    return (
      <div className="container error">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="edit-post-page">
      <div className="container">
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        <PostForm
          mode="edit"
          initialData={post}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          loading={submitting}
        />
      </div>
    </div>
  );
};

export default EditPost;