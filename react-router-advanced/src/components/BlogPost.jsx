import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id);

  // Mock data
  const posts = {
    1: { title: 'Getting Started with React Router', content: 'React Router is a powerful routing library...' },
    2: { title: 'Advanced Routing Patterns', content: 'Learn about nested routes, protected routes, and more...' },
    3: { title: 'Protected Routes in React', content: 'How to implement authentication-based routing...' }
  };

  if (!posts[postId]) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-post">
      <h3>{posts[postId].title}</h3>
      <p>{posts[postId].content}</p>
      <p>This is the content for blog post {id}.</p>
    </div>
  );
};

export default BlogPost;