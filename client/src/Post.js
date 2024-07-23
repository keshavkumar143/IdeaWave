import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({ _id, title, summary, cover, createdAt, author, onDelete, currentUserId }) {
  if (!author) {
    return <div className="text-center text-red-500">Author information is missing.</div>;
  }

  const isAuthor = author._id === currentUserId;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="mb-4">
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/' + cover} alt={title} className="w-full h-52 object-cover rounded-lg"/>
        </Link>
      </div>
      <div className="text-gray-800 mb-2">
        <Link to={`/post/${_id}`}>
          <h2 className="text-xl font-semibold">{title}</h2>
        </Link>
        <p className="text-sm text-gray-600">
          <a className="font-semibold">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="text-gray-700">{summary}</p>
      </div>
      {isAuthor && onDelete && (
        <button
          onClick={() => onDelete(_id)}
          className="w-full py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
      )}
    </div>
  );
}
