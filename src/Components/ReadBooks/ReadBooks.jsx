import { getBooks } from "../Utilitis";



const ReadBooks = () => {
   const booksingle = getBooks()
   const data = localStorage.getItem('books')
   
   console.log(JSON.parse(data));
    return (
        <div>
            <h1>Read the book</h1>
        </div>
    );
};

export default ReadBooks;