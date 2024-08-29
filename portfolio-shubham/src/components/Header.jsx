import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center mx-auto py-4 w-3/4">
      <div>
        <p className="text-6xl font-bold">
          <Link to="/">SP.</Link>
        </p>
      </div>
      <nav className="flex items-center">
        <ul className="md:flex space-x-4 hidden md:block">
          <li className="hover:text-teal-600 hover:font-semibold">
            <Link to="/">About</Link>
          </li>
          <li className="hover:text-teal-600 hover:font-semibold">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-teal-600 hover:font-semibold">
            <Link to="/experience">Experience</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
