import { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h1 className="font-playfair text-[40px] font-bold text-center">Books</h1>
      <Suspense fallback={<span>Loading..</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((book) => (
            <Book book={book} key={book.bookId} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
