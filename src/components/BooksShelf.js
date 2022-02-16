import {
  Link,
} from "react-router-dom";
import Header from "../components/Header";
import BookItem from "../components/BookItem";

const BooksShelf = ({ books }) => {


  const BooksList = books?.map((item) => {
      return (
          <BookItem key={item.id} title={item.title} authors={item.authors} imageLinks={item.imageLinks} books={books} />
      );
  });

  return (
    <div>
      <Header />
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {BooksList}
              </ol>
            </div>
          </div>
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

export default BooksShelf;
