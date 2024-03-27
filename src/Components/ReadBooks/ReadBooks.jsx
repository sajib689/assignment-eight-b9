import { useEffect, useState } from "react";
import { getBooks } from "../Utilitis";
import ReadBookCard from "../ReadBookCard/ReadBookCard";

const ReadBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storeBooks = getBooks();
    setBooks(storeBooks);
  }, []);
 
 
  return (
    <div className="grid grid-cols md:grid-cols-1 gap-5">
    {
        books.map(book => <ReadBookCard key={book.bookId} book={book}></ReadBookCard>)
    }
    </div>
  );
};

export default ReadBooks;
