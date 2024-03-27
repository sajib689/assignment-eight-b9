import { useLoaderData, useParams } from "react-router-dom";
import { getBooks } from "../Utilitis";


const ReadBooks = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookInt = parseInt(bookId);
    const getbook = books.books;
    const book = getbook.find((b) => b.bookId === bookInt);
    
  
   const booksingle = getBooks(book)
   console.log(booksingle)
    return (
        <div>
            
        </div>
    );
};

export default ReadBooks;