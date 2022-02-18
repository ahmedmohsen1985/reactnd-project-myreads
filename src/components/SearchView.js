import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookItem from "../components/BookItem";
import * as BooksAPI from "../BooksAPI";

const Search = ({ updateBookShelf, books }) => {

  const [searchBooks, setSearchBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let isActive = true;
    if (query) {
      BooksAPI.search(query).then((data) => {
        if (data.error) {
          setSearchBooks([]);
        } else {
          if (isActive) {
            updateShelf(data)
            setSearchBooks(data);
          }
        }
      });
    }
    return () => {
      isActive = false;
      setSearchBooks([]);
    };
    // eslint-disable-next-line
  }, [query]);

  const updateShelf = (searchBooks) => {
    // eslint-disable-next-line
    searchBooks && searchBooks.map(book => {
      book.shelf = 'none'
      // eslint-disable-next-line
      books && books.map(bookItem => {
          if (bookItem.id === book.id) {
              book.shelf = bookItem.shelf
          }
      })
    })
  }

  return (
    <div className="box">
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks.map((item) =>
                <li key={item.id}>
                  <BookItem book={item} changeBookShelf={updateBookShelf} />
                </li>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Search;
