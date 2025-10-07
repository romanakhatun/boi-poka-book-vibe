import { FaRegStar } from "react-icons/fa6";

const Book = ({ book }) => {
  const { bookName, author, image, rating, tags } = book;

  return (
    <div>
      <div className="card w-96 border border-[#13131326] p-6">
        <figure className="bg-[#f3f3f3] p-8 rounded-xl">
          <img className="h-[166px]" src={image} alt={bookName} />
        </figure>
        <div>
          <div className="flex gap-8 mt-[31px] mb-[23px] ">
            {tags.map((tag, i) => (
              <li key={i} className="list-none text-[#23BE0A] font-medium">
                {tag}
              </li>
            ))}
          </div>
          <h2 className="card-title font-playfair">{bookName}</h2>
          <p className="font-medium text-[#131313cc] mt-4 mb-5 ">
            By: {author}
          </p>
          <div className="border-b border-dashed border-[#13131326]"></div>
          <div className="text-[#131313cc] flex items-center justify-between mt-5">
            <p className=" font-medium">Fiction</p>
            <div className="flex items-center gap-2">
              <span className="text-[16px] mt-1">{rating}</span>
              <FaRegStar className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
