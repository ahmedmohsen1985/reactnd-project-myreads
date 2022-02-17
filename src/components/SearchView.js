import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookItem from "../components/BookItem";
import * as BooksAPI from "../BooksAPI";

const Search = ({ updateBookShelf, mapBooksId }) => {
  const [searchBooks, setSearchBooks] = useState([]);
  const [combindBooks, setCombindBooks] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    let isActive = true;
    if (query) {
      BooksAPI.search(query).then((data) => {
        if (data.error) {
          setSearchBooks([]);
        } else {
          if (isActive) {
            setSearchBooks(data);
          }
        }
      });
    }
    return () => {
      isActive = false;
      setSearchBooks([]);
    };
  }, [query]);

  useEffect(() => {
    const combined = searchBooks.map((book) => {
      if (mapBooksId.has(book.id)) {
        return mapBooksId.get(book.id);
      } else {
        return book;
      }
    });
    setCombindBooks(combined);
    // eslint-disable-next-line
  }, [searchBooks]);

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
            {combindBooks.map((item) =>
              (!item.imageLinks?.thumbnail || !item?.authors) ??
              "Unknown Data" ? null : (
                <li key={item.id}>
                  <BookItem
                    book={item}
                    changeBookShelf={updateBookShelf}
                  />
                </li>
              )
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Search;
