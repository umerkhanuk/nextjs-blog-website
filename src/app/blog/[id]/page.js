"use client";

import { useState } from "react";
import posts from "../../data/posts.json";
import CommentForm from "../../component/CommentForm";

export default function BlogPost({ params }) {
  const postId = parseInt(params.id, 10);
  if (isNaN(postId)) {
    return <div className="text-red-500">Invalid post ID</div>;
  }

  const post = posts.find((post) => post.id === postId);

  const [comments, setComments] = useState(post?.comments || []);

  if (!post) {
    return <div className="text-red-500">Post not found</div>;
  }

  const handleAddComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div className="max-w-5xl  p-6 bg-white rounded-lg my-32">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.content}</p>

      <div className="border-t border-gray-300 mt-6 pt-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Comments</h2>
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li key={index} className="p-4  rounded-lg shadow">
              <strong className="text-gray-800">{comment.name}:</strong> <span className="text-gray-600">{comment.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <CommentForm onAddComment={handleAddComment} />
    </div>
  );
}