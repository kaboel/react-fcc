import React, { useState, useEffect } from "react";

const NewSong = ({ addSong }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {});

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name:</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="Add song" />
    </form>
  );
};

export default NewSong;
