import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";

const Home = () => {
  //Method-1:
  // const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //   fetch("booksData.json").then((res) =>
  //     res.json().then((data) => setAllBooks(data))
  //   );
  // }, []);
  // console.log(allBooks);

  //Method-2:
  // const bookPromise = fetch("booksData.json").then((res) => res.json());

  // Method-3:
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <title>Home | Boi Poka</title>
      <Banner />
      <div className="my-25">
        <Books data={data} />
      </div>
    </div>
  );
};

export default Home;
