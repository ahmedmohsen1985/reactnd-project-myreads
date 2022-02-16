import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import BookItem from '../components/BookItem'

const Search = ({ books }) => {

  const [searchBooks, setSearchBooks] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchBooks(event.target.value);
  };
  useEffect(() => {
      const results = books.filter(bookItem =>
        bookItem.title.toString().toLowerCase().includes(searchBooks)
      );
      setSearchResults(results);
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
              value={searchBooks}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"> 
            {searchResults.map(item => (
              <BookItem key={item.id} title={item.title} authors={item.authors} imageLinks={item.imageLinks} books={books} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Search;
