import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { id: 1, title: 'Getting Started with React Router' },
    { id: 2, title: 'Advanced Routing Patterns' },
    { id: 3, title: 'Protected Routes in React' },
  ];

  return (
    <div className="blog">
      <h2>Blog Posts</h2>
      <div className="blog-layout">
        <div className="blog-sidebar">
          <h3>Posts</h3>
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="blog-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Blog;