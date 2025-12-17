import { useState } from "react";

export const BlogForm = ({ addPost }) => {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addPost(title);
    setTitle("");
  };

  return (
    <form onSubmit={submit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button>Add Post</button>
    </form>
  );
};