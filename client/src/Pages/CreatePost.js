import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Editor from "../Editor";

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState(null); // Initialize as null
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();

    // Validate form fields
    if (!title || !summary || !content) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Validate file selection
    if (!files || files.length === 0) {
      toast.error("Please select a file for the post.");
      return;
    }

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);

    try {
      const response = await fetch('http://localhost:4000/post', {
        method: 'POST',
        body: data,
        credentials: 'include',
      });

      if (response.ok) {
        toast.success("Post created successfully!");
        setRedirect(true);
      } else {
        const error = await response.json();
        toast.error(`Failed to create post: ${error.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to create post: ' + error.message);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <>
      <form className="max-w-xl mx-auto my-auto p-6 shadow-md" onSubmit={createNewPost}>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Summary"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />
        <input
          type="file"
          className="mb-4"
          onChange={(ev) => setFiles(ev.target.files)}
        />
        <div className="mb-4">
          <Editor value={content} onChange={setContent} />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Create post
        </button>
      </form>
      <ToastContainer />
    </>
  );
}
