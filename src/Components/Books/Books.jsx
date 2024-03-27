import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";


const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data.books))
    },[])
    return (
        <div className="grid grid-cols md:grid-cols-3 gap-4">
            {
                books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
            }
        </div>
    );
};

export default Books;