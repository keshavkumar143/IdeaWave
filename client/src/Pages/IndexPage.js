import Post from "../Post";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    // Fetch the current user information
    fetch('http://localhost:4000/profile', { credentials: 'include' })
      .then(response => response.json())
      .then(user => setCurrentUserId(user.id))
      .catch(error => {
        console.error('Error fetching user:', error);
        setError('Failed to fetch user information. Please try again later.');
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(posts => setPosts(posts))
      .catch(error => {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts. Please try again later.');
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/post/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setPosts(posts.filter(post => post._id !== id));
    })
    .catch(error => {
      console.error('Error deleting post:', error);
      setError('Failed to delete post. Please try again later.');
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4">
      <div className="container mx-auto max-w-7xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Blogs</h1>
          <p className="text-lg text-gray-600">Stay updated with the latest posts</p>
        </header>
        {error && (
          <div className="text-red-600 text-center mb-4">
            <p>{error}</p>
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map(post => (
              <Post
                key={post._id}
                {...post}
                onDelete={handleDelete}
                currentUserId={currentUserId}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
