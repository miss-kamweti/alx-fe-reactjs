import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  
  const posts = {
    1: { title: 'Getting Started with React', content: 'React is a JavaScript library for building user interfaces...' },
    2: { title: 'Understanding React Router', content: 'React Router is a powerful routing library for React...' },
    3: { title: 'Advanced React Patterns', content: 'Learn about advanced patterns in React development...' }
  };

  const post = posts[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>This is blog post #{id}</p>
    </div>
  );
};

export default BlogPost;