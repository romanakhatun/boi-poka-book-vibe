import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utilities/addToDB";
import Book from "../../components/Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const allData = useLoaderData();

  useEffect(() => {
    const readData = getStoredBook();
    console.log(readData);
    const convertReadId = readData.map((id) => parseInt(id));
    const myReadList = allData.filter((book) =>
      convertReadId.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [allData]);
  console.log(readList);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortByPage);
    }
    if (type === "ratings") {
      const sortByRatings = [...readList].sort((a, b) => a.ratings - b.ratings);
      setReadList(sortByRatings);
    }
  };
  return (
    <div>
      <div className="flex justify-center mt-8 mb-[56px]">
        <details className="dropdown">
          <summary className="btn m-1">Sort By: {sort ? sort : ""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => handleSort("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => handleSort("ratings")}>
              <a>Ratings</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h1>Book I read {readList.length}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
            {readList.map((book) => (
              <Book key={book.bookId} book={book} />
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

export default ReadList;
