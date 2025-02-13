import { Link, useLocation } from "react-router-dom";

import HomeWorkIcon from "@mui/icons-material/HomeWork";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "bg-blue-700 text-white"
      : "text-white hover:bg-blue-700 hover:text-white";
  };

  return (
    <nav className="bg-blue-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <HomeWorkIcon className="h-8 w-8 text-white" />
            <span className="font-bold text-xl text-white hidden md:block">
              NextiaTest
            </span>
          </Link>
          <div className="flex space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(
                "/"
              )}`}
            >
              Users
            </Link>
            <Link
              to="/posts"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(
                "/posts"
              )}`}
            >
              Posts
            </Link>
            <Link
              to="/posts/create"
              className="ml-4 px-4 py-2 bg-white text-blue-600 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Create Post
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
