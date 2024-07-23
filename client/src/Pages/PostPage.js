import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { Link } from 'react-router-dom';

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`http://localhost:4000/post/${id}`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const postData = await response.json();
        setPostInfo(postData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!postInfo) return <div className="text-center">Post not found</div>;

  const isAuthor = userInfo?.id === postInfo.author?._id;

  return (
    <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">{postInfo.title}</h1>
      <time className="block text-sm text-gray-500 mb-2">{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="text-sm text-gray-600 mb-6">by <span className="font-semibold">@{postInfo.author?.username || 'Unknown'}</span></div>
      {isAuthor && (
        <div className="mb-6 flex justify-end">
          <Link
            to={`/edit/${postInfo._id}`}
            className="inline-flex items-center px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition duration-300"
          >
            Edit Post
          </Link>
        </div>
      )}
      {postInfo.cover && (
        <div className="mb-6">
          <img
            src={`http://localhost:4000/${postInfo.cover}`}
            alt={`Cover image for ${postInfo.title}`}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      )}
      <div className="prose prose-lg text-gray-800" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
}
