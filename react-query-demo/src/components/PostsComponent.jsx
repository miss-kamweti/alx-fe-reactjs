import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data: posts, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000, // Data is considered fresh for 5 seconds
    gcTime: 60000, // Cache persists for 60 seconds (formerly cacheTime)
  });

  if (isLoading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h2>Posts from JSONPlaceholder</h2>
        <button 
          onClick={() => refetch()} 
          disabled={isFetching}
          className="refetch-button"
        >
          {isFetching ? 'Refetching...' : 'Refetch Data'}
        </button>
      </div>
      
      <div className="posts-grid">
        {posts?.slice(0, 10).map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>Post ID: {post.id}</small>
          </div>
        ))}
      </div>
      
      <div className="cache-info">
        <p>Data is cached by React Query. Check the network tab to see fewer requests when navigating away and back!</p>
      </div>
    </div>
  );
};

export default PostsComponent;