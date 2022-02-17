import BookItem from "../components/BookItem";

const BooksShelf = ({ books, shelfTitle, updateBookShelf }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

              {books.map(item => (
                        <li key={item.id}>
                            <BookItem book={item} changeBookShelf={updateBookShelf}/>
                        </li>
              ))}  
            
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BooksShelf;
