import React, { useState, useEffect } from "react";
import { v1 as uid } from "uuid";
import NewSong from "../NewSong";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);
  const [age, setAge] = useState(20);

  useEffect(() => {
    console.log("useEffect for Song ran");
  }, [songs]);
  useEffect(() => {
    console.log("useEffect for Age ran");
  }, [age]);

  const addSong = (newTitle) => {
    setSongs([
      ...songs,
      {
        title: newTitle,
        id: uid(),
      },
    ]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSong addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>
        {`${age - 1} + 1 = ${age}`}
      </button>
    </div>
  );
};

export default SongList;
