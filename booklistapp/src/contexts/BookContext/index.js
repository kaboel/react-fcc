import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "patrick rothfuss", id: 1 },
    { title: "the way of kings", author: "brandon sanderson", id: 2 },
    { title: "the final empire", author: "patrick rothfuss", id: 3 },
    { title: "the hero of ages", author: "brandon sanderson", id: 4 },
    { title: "songs of ice and fire", author: "george r.r. martin", id: 5 },
  ]);

  const addBook = (title, author) => {
    setBooks([
      ...books,
      {
        title: title,
        author: author,
        id: books[books.length - 1].id + 1,
      },
    ]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
