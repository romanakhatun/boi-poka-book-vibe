import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utilities/addToDB";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListBookCard from "../../components/ListBookCard/ListBookCard";

const ListedBooks = () => {
  const [sort, setSort] = useState("");
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const readId = getStoredBook();
    const cReadId = readId.map((id) => parseInt(id));
    const myReadList = data.filter((book) => cReadId.includes(book.bookId));
    setReadList(myReadList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
    let sortedBooks = [...readList];

    if (type === "pages") {
      sortedBooks.sort((a, b) => a.totalPages - b.totalPages);
    }

    if (type === "ratings") {
      sortedBooks.sort((a, b) => a.rating - b.rating);
    }

    if (type === "publisher-year") {
      sortedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
    }
    setReadList(sortedBooks);
  };
  return (
    <div className="max-w-6xl mx-auto px-8">
      <div className="bg-[#1313130d] rounded-2xl py-8 w-full mt-2">
        <h1 className="font-playfair text-[40px] font-bold text-center">
          Books
        </h1>
      </div>
      <div className="flex justify-center mt-8 mb-[56px]">
        <select
          id="sort"
          className="rounded-lg px-3 py-2 focus:outline-none bg-[#23BE0A] text-white"
          value={sort}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option className="bg-white text-[#131313cc]" value="" disabled>
            Sort by
          </option>
          <option className="bg-white text-[#131313cc]" value="ratings">
            Rating
          </option>
          <option className="bg-white text-[#131313cc]" value="pages">
            Number of pages
          </option>
          <option className="bg-white text-[#131313cc]" value="publisher-year">
            Publisher year
          </option>
        </select>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-6 mt-9 mb-20">
            {readList.map((book) => (
              <ListBookCard key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
