import { Link, useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookInt = parseInt(bookId);
  const getbook = books.books;
  const book = getbook.find((b) => b.bookId === bookInt);
  const {
    bookName,
    author,
    image,
    category,
    tags,
    rating,
    review,
    publisher,
    yearOfPublishing,
    totalPages,
  } = book;
  console.log(book);
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex bg-[#1313130D] rounded-lg md:w-[570px]  items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={image}
            alt=""
            className="p-5 object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col  p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            {bookName}
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-[#131313CC]">
            By : {author}
          </p>
          <hr />
          <p>{category}</p>
          <hr />
          <p className="mt-2 mb-2">
            <span>Review:</span> {review}
          </p>
          <div className="flex gap-4 mt-4 mb-4">
            {tags.map((tag) => (
              <button key={tag} className="btn btn-sm text-[#23BE0A]">
                {tag}
              </button>
            ))}
          </div>
          <hr />
          <table className="mt-5">
            <tbody>
              <tr>
                <td>Number of Pages:</td>
                <td>
                  <span className="text-[#131313] font-bold">{totalPages}</span>
                </td>
              </tr>
              <tr>
                <td>Publisher:</td>
                <td>
                  <span className="text-[#131313] font-bold">
                    {yearOfPublishing}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Year of Publishing:</td>
                <td>
                  <span className="text-[#131313] font-bold">{publisher}</span>
                </td>
              </tr>
              <tr>
                <td>Rating:</td>
                <td>
                  <span className="text-[#131313] font-bold">{rating}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-5 flex gap-3">
        <Link to={`listbooks/${bookInt}`} className="btn btn-active">Read</Link>
        <button className="btn btn-active btn-primary">Wishlist</button>


        </div>
        </div>
      
      </div>
    </section>
  );
};

export default BookDetails;
