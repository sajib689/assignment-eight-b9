import { useEffect, useState } from "react";
import {  getWishlist } from "../Utilitis";
import ReadBookCard from "../ReadBookCard/ReadBookCard";

const WishlistBooks = () => {
    const [books, setBooks] = useState([]);
  useEffect(() => {
    const storeBooks = getWishlist();
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

export default WishlistBooks;