//import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BooksShelf from "./BooksShelf";

const Home = ({ books, updateBookShelf }) => {
  const currentlyReading = books.filter(
    (bookItem) => bookItem.shelf === "currentlyReading"
  );
  const wantToRead = books.filter(
    (bookItem) => bookItem.shelf === "wantToRead"
  );
  const Read = books.filter(
    (bookItem) => bookItem.shelf === "read"
  );

  return (
    <div>
      <Header />
      <div className="list-books-content">
        <div>
          <BooksShelf
            books={currentlyReading}
            shelfTitle="Currently Reading"
            updateBookShelf={updateBookShelf}
          />
          <BooksShelf
            books={wantToRead}
            shelfTitle="Want to Read"
            updateBookShelf={updateBookShelf}
          />
          <BooksShelf
            books={Read}
            shelfTitle="Read"
            updateBookShelf={updateBookShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
