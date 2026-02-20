import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const [refetchCount, setRefetchCount] = useState(0);
  
  const { 
    data: posts, 
    isLoading, 
    error, 
    refetch, 
    isFetching,
    dataUpdatedAt 
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 30000, // Data stays fresh for 30 seconds
    gcTime: 60000, // Cache persists for 60 seconds
  });

  const handleRefetch = () => {
    refetch();
    setRefetchCount(prev => prev + 1);
  };

  if (isLoading) return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Loading posts...</p>
    </div>
  );
  
  if (error) return (
    <div className="error">
      <h3>Error Loading Posts</h3>
      <p>{error.message}</p>
      <button onClick={handleRefetch}>Try Again</button>
    </div>
  );

  return (
    <div className="posts-container">
      <div className="posts-header">
        <div>
          <h2>Posts from JSONPlaceholder</h2>
          <p className="cache-info">
            Last updated: {new Date(dataUpdatedAt).toLocaleTimeString()}
          </p>
        </div>
        <button 
          onClick={handleRefetch} 
          disabled={isFetching}
          className={`refetch-button ${isFetching ? 'fetching' : ''}`}
        >
          {isFetching ? 'Refetching...' : 'Refetch Data'}
        </button>
      </div>
      
      <div className="refetch-count">
        Manual refetches: {refetchCount}
      </div>
      
      <div className="posts-grid">
        {posts?.slice(0, 10).map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div className="post-footer">
              <small>Post ID: {post.id}</small>
              <small>User ID: {post.userId}</small>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cache-demo">
        <h3>React Query Caching Demo</h3>
        <p>Navigate away and come back - data will load from cache!</p>
        <div className="cache-stats">
          <div className="stat">
            <span className="stat-label">Total Posts:</span>
            <span className="stat-value">{posts?.length}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Displayed:</span>
            <span className="stat-value">10</span>
          </div>
          <div className="stat">
            <span className="stat-label">Cache Status:</span>
            <span className="stat-value active">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsComponent;