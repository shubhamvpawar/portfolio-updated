const Header = () => {
  return (
    <header className="flex justify-between items-center mx-auto py-8 w-3/4">
      <div>
        <p className="text-6xl font-bold">SP.</p>
      </div>
      <nav className="flex items-center">
        <ul className="flex space-x-4">
          <li className="hover:text-red-600 hover:font-semibold">Resume</li>
          <li className="hover:text-red-600 hover:font-semibold">Projects</li>
          <li className="hover:text-red-600 hover:font-semibold">Experience</li>
          <li className="hover:text-red-600 hover:font-semibold">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
