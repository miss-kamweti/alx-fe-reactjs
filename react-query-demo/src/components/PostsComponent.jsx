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
  const { 
    data: posts, 
    isLoading, 
    isError,           // Using isError instead of error
    error,             // Keep error for error message
    refetch, 
    isFetching,
    dataUpdatedAt,
    isStale            // For caching demonstration
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000,   // Data considered fresh for 5 seconds
    gcTime: 60000,     // Cache persists for 60 seconds
  });

  // Handle loading state
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading posts...</p>
      </div>
    );
  }

  // Handle error state - using isError as required
  if (isError) {
    return (
      <div className="error-container">
        <h3>Error Loading Posts</h3>
        <p>{error?.message || 'An error occurred while fetching posts'}</p>
        <button onClick={() => refetch()} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="posts-container">
      <div className="posts-header">
        <div>
          <h2>Posts from JSONPlaceholder</h2>
          <p className="cache-info">
            Last updated: {new Date(dataUpdatedAt).toLocaleTimeString()}
            {isStale ? ' (Data is stale)' : ' (Data is fresh)'}
          </p>
        </div>
        <button 
          onClick={() => refetch()} 
          disabled={isFetching}
          className={`refetch-button ${isFetching ? 'fetching' : ''}`}
        >
          {isFetching ? 'Refetching...' : 'Refetch Data'}
        </button>
      </div>
      
      {/* Caching demonstration message */}
      <div className="caching-demo">
        <h3>React Query Caching Demo</h3>
        <p>Navigate away and come back - data will load from cache!</p>
        <div className="cache-status">
          <span className="cache-badge active">Cache Active</span>
          <span className="cache-info-text">
            {posts?.length} posts cached • Stale time: 5s • Cache time: 60s
          </span>
        </div>
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
      
      <div className="refetch-info">
        <button 
          onClick={() => refetch()} 
          className="refetch-mini-button"
        >
          Manual Refetch
        </button>
        <span className="fetching-status">
          {isFetching ? 'Fetching...' : 'Idle'}
        </span>
      </div>
    </div>
  );
};

export default PostsComponent;