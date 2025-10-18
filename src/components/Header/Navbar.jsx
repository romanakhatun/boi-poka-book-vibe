import { NavLink } from "react-router";

const Navbar = () => {
  const Links = [
    { to: "/", label: "Home" },
    { to: "/listed-books", label: "Listed Books" },
    { to: "/pages-to-read", label: " Pages to Read" },
  ];
  return (
    <div>
      <div className="navbar py-7 max-w-6xl px-6 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box bg-base-100 z-1 mt-3 w-52 p-2 shadow"
            >
              {Links.map((link) => (
                <li key={link.to} className="">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#23BE0A] font-semibold text-[18px]"
                        : "text-[18px]"
                    }
                    to={link.to}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <a className="text-[28px] font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8">
            {Links.map((link) => (
              <li key={link.to} className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#23BE0A] font-semibold text-[18px] border border-[#23BE0A] py-[14px] px-5 rounded-lg"
                      : "text-[18px]"
                  }
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <a className="btn bg-[#23BE0A] text-white  border-none ">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white border-none">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
