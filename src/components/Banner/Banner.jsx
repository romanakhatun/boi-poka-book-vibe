import bookImg from "../../assets/book.png";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <div className="flex flex-col md:flex-row md:gap-5 items-center justify-center px-3 bg-[#F3F3F3] rounded-3xl h-[554px]">
        <div>
          <h1 className="text-[40px] lg:text-[56px] font-playfair font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn border-0 bg-[#23BE0A] text-white mt-4">
            View The List
          </button>
        </div>
        <img className="md:w-3/12" src={bookImg} alt="book" />
      </div>
    </div>
  );
};

export default Banner;
