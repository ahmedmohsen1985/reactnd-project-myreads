import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/SearchView";
import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

function BooksApp() {
  const [books, setBooks] = useState([]);
  const [mapBooksId, setmapBooksId] = useState(new Map());

  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setBooks(data);
      setmapBooksId(createMapOfBooks(data));
    });
  }, []);

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };

  const updateBookShelf = (book, whereTo) => {
    const updatedBooks = books.map((item) => {
      if (item.id === book.id) {
        book.shelf = whereTo;
        return book;
      }
      return item;
    });
    if (!mapBooksId.has(book.id)) {
      book.shelf = whereTo;
      updatedBooks.push(book);
    }
    setBooks(updatedBooks);
    BooksAPI.update(book, whereTo);
  };

  return (
    <div className="app">
      <div className="list-books">
        <Routes>
          <Route
            path="/"
            element={<Home books={books} updateBookShelf={updateBookShelf} />}
          />
          <Route
            path="search"
            element={
              <Search
                books={books}
                updateBookShelf={updateBookShelf}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default BooksApp;
