import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router";

const ListBookCard = ({ book }) => {
  const {
    bookName,
    author,
    image,
    tags,
    publisher,
    yearOfPublishing,
    totalPages,
    rating,
    category,
    bookId,
  } = book;
  return (
    <div className="border border-[#13131326] rounded-2xl">
      <div className="flex flex-col md:flex-row gap-12 p-5">
        <div className="flex justify-center md:justify-normal md:block ">
          <figure className="bg-[#f3f3f3] py-7 px-12 rounded-xl text-center">
            <img className="h-[170px]" src={image} alt={bookName} />
          </figure>
        </div>
        <div className="flex-1">
          <h2 className="card-title font-playfair font-bold">{bookName}</h2>
          <p className="font-medium text-[#131313cc] mt-4 mb-5 ">
            By: {author}
          </p>
          <div className="flex gap-8 my-4">
            <strong>Tag</strong>
            {tags.map((tag, i) => (
              <li key={i} className="list-none text-[#23BE0A] font-medium">
                #{tag}
              </li>
            ))}
            <div>
              <p className="text-[#131313cc] flex gap-2">
                <FiMapPin className="text-2xl" /> Year of Publishing:{" "}
                {yearOfPublishing}
              </p>
            </div>
          </div>
          <div className="text-[#13131399] flex gap-4">
            <p className="flex gap-2">
              <svg
                viewBox="0 0 21.0007 19.5"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="21.000732"
                height="19.500000"
                fill="none"
                customframe="#000000"
              >
                <path
                  id="Vector"
                  d="M13.501 16.878C14.354 17.1257 15.2378 17.2509 16.126 17.25C17.5544 17.2521 18.9642 16.9264 20.247 16.298C20.2849 15.4017 20.0296 14.5175 19.5198 13.7793C19.0099 13.0412 18.2734 12.4894 17.4217 12.2075C16.57 11.9257 15.6497 11.9291 14.8002 12.2174C13.9506 12.5057 13.2183 13.063 12.714 13.805M13.501 16.875C13.501 15.762 13.215 14.715 12.714 13.805C12.0331 12.564 10.9585 11.5849 9.65966 11.0221C8.36082 10.4593 6.91161 10.3448 5.54049 10.6966C4.16937 11.0484 2.95435 11.8466 2.08698 12.9653C1.21961 14.0839 0.749234 15.4595 0.750001 16.875L0.751001 16.984C2.613 18.105 4.794 18.75 7.125 18.75C9.37161 18.7538 11.5765 18.1431 13.501 16.984L13.501 16.878L13.501 16.875ZM9.51249 6.51149C8.87955 7.14442 8.02111 7.5 7.126 7.5C6.2309 7.5 5.37245 7.14442 4.73952 6.51149C4.10658 5.87855 3.751 5.02011 3.751 4.125C3.751 3.22989 4.10658 2.37145 4.73952 1.73851C5.37245 1.10558 6.2309 0.75 7.126 0.75C8.02111 0.75 8.87955 1.10558 9.51249 1.73851C10.1454 2.37145 10.501 3.22989 10.501 4.125C10.501 5.02011 10.1454 5.87855 9.51249 6.51149ZM17.9822 8.23116C17.4899 8.72344 16.8222 9 16.126 9C15.4298 9 14.7621 8.72344 14.2698 8.23116C13.7776 7.73887 13.501 7.07119 13.501 6.375C13.501 5.67881 13.7776 5.01113 14.2698 4.51884C14.7621 4.02656 15.4298 3.75 16.126 3.75C16.8222 3.75 17.4899 4.02656 17.9822 4.51884C18.4744 5.01113 18.751 5.67881 18.751 6.375C18.751 7.07119 18.4744 7.73887 17.9822 8.23116Z"
                  fillRule="nonzero"
                  stroke="rgb(19,19,19)"
                  strokeOpacity="0.600000024"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              Publisher: {publisher}
            </p>
            <p className="flex gap-2">
              <svg
                viewBox="0 0 16.5 21"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="16.500000"
                height="21.000000"
                fill="none"
                customframe="#000000"
              >
                <path
                  id="Vector"
                  d="M15.75 12.75L15.75 10.125C15.75 9.22989 15.3944 8.37145 14.7615 7.73851C14.1286 7.10558 13.2701 6.75 12.375 6.75L10.875 6.75C10.5766 6.75 10.2905 6.63147 10.0795 6.4205C9.86853 6.20952 9.75 5.92337 9.75 5.625L9.75 4.125C9.75 3.22989 9.39442 2.37145 8.76149 1.73851C8.12855 1.10558 7.27011 0.75 6.375 0.75L4.5 0.75M5.25 15L5.25 15.75M8.25 12.75L8.25 15.75M11.25 10.5L11.25 15.75M1.875 0.75C1.254 0.75 0.75 1.254 0.75 1.875L0.75 19.125C0.75 19.746 1.254 20.25 1.875 20.25L14.625 20.25C15.246 20.25 15.75 19.746 15.75 19.125L15.75 9.75C15.75 7.36305 14.8018 5.07387 13.114 3.38604C11.4261 1.69821 9.13695 0.75 6.75 0.75L1.875 0.75Z"
                  fillRule="nonzero"
                  stroke="rgb(19,19,19)"
                  strokeOpacity="0.600000024"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              Page {totalPages}
            </p>
          </div>
          <div className="border-b-[1px] border-[#13131326] my-4"></div>

          <div className="space-x-4 mt-4">
            <button className="btn bg-[#328eff26] border-none text-[#328eff] rounded-full">
              Category: {category}
            </button>
            <button className="btn bg-[#ffac331a] border-none text-[#ffac33] rounded-full">
              Rating: {rating}
            </button>
            <button className="btn border-none font-medium bg-[#23BE0A] text-white rounded-full">
              <Link to={`/book-details/${bookId}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBookCard;
