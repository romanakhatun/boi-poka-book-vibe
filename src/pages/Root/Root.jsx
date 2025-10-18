import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
