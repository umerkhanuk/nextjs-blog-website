import React, { useState } from "react";

type CommentFormProps = {
  onAddComment: (comment: { name: string; text: string }) => void;
};

export default function CommentForm({ onAddComment }: CommentFormProps) {
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim() && newComment.trim()) {
      onAddComment({ name, text: newComment });
      setNewComment("");
      setName("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-[#ff3366] text-white px-8 py-4  text-base rounded-full"
      >
        Submit
      </button>
    </div>
  );
}
