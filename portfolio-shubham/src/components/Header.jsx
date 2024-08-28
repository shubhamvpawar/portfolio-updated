const Header = () => {
  return (
    <header className="flex justify-between">
      <div>
        <p className="text-6xl font-bold">SP.</p>
      </div>
      <nav className="flex items-center">
        <ul className="flex space-x-4">
          <li>Resume</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
