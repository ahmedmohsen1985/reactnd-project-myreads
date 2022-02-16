
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksShelf from './components/BooksShelf'
import Search from './components/SearchView'
import React, { useEffect, useState } from "react";

import {
  Routes,
  Route
} from "react-router-dom";

function BooksApp() {

  const [books, setBooks] = useState([]);


  useEffect(() => {
    BooksAPI.getAll().then( data => setBooks(data))
    // eslint-disable-next-line
  }, []);

      

    return (
      <div className="app">
          <div className="list-books">
            <Routes>
              <Route path='/' element={<BooksShelf books={books} />} />
              <Route path='search' element={<Search books={books} />} />
            </Routes>
          </div>  
      </div>
    )
  }


export default BooksApp
