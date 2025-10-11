import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utilities/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === bookId);

  if (!singleBook) {
    return <AppError />;
  }

  const { bookName, author, image, rating, tags, review } = singleBook || {};

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };

  return (
    <>
      <title>{bookName}</title>
      <div className="flex flex-col md:flex-row gap-12 p-5">
        <div className="flex justify-center md:justify-normal md:block ">
          <figure className="bg-[#f3f3f3] p-[74px] rounded-xl text-center">
            <img
              className="h-[200px] md:w-48 md:h-auto"
              src={image}
              alt={bookName}
            />
          </figure>
        </div>
        <div className="flex-1">
          <h2 className="card-title font-playfair font-bold">{bookName}</h2>
          <p className="font-medium text-[#131313cc] mt-4 mb-5 ">
            By: {author}
          </p>
          <div className="border-b-[1px] border-[#13131326]"></div>
          <p className="text-[16px] my-4">Fiction</p>
          <div className="border-b-[1px] border-[#13131326]"></div>
          <p className="mt-4">
            <strong>Review: </strong>
            {review}
          </p>
          <div className="flex gap-8 mt-[31px] mb-[23px] ">
            <strong>Tag</strong>
            {tags.map((tag, i) => (
              <li key={i} className="list-none text-[#23BE0A] font-medium">
                #{tag}
              </li>
            ))}
          </div>
          <div className="border-b-[1px] border-[#13131326] my-4"></div>

          <div className="text-[#131313cc] space-y-3">
            <div className="flex items-center gap-2">
              <p>Number of Pages:</p>
              <span className="text-[16px] mt-1 font-semibold">{rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <p>Publisher:</p>
              <span className="text-[16px] mt-1 font-semibold">{rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <p>Year of Publishing:</p>
              <span className="text-[16px] mt-1 font-semibold">{rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <p>Rating:</p>
              <span className="text-[16px] mt-1 font-semibold">{rating}</span>
            </div>
          </div>
          <div className="space-x-4 mt-8">
            <button
              onClick={() => handleMarkAsRead(id)}
              className="btn bg-white"
            >
              Mark as Read
            </button>
            <button className="btn bg-[#50B1C9] border-none text-white">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
