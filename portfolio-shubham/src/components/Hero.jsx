import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="items-center mx-auto py-8 w-3/4">
      <h1 className="text-3xl font-semibold">
        I<span className="text-red-800">&apos;</span>m Shubham Pawar
      </h1>
      <p className="py-4">
        Frontend Developer, UI/UX Enthusiast, with over 2 years of{" "}
        <span className="underline font-bold mx-1">
          <Link to="/experience">Experience.</Link>
        </span>
        I spend my days exploring and implementing new concepts into my workflow
        and
        <span className="underline font-bold ml-1">
          <Link to="/projects">Projects.</Link>
        </span>
      </p>
      <p className="py-4">
        Embracing minimalism, I find beauty in simplicity. When not crafting web
        experiences, I immerse myself in capturing the beauty of nature, or lose
        myself in the captivating flow of melodies, anyways you can contact me.
      </p>
      <ul className="flex flex-wrap space-x-2 ">
        <li className="border border-white ml-0 m-2 px-2 rounded-lg hover:bg-teal-900 hover:bg-opacity-50 font-semibold">
          HTML
        </li>
        <li className="border border-white m-2 px-2 rounded-lg hover:bg-teal-900 hover:bg-opacity-50 font-semibold">
          CSS
        </li>
        <li className="border border-white m-2 px-2 rounded-lg hover:bg-teal-900 hover:bg-opacity-50 font-semibold">
          JavaScript
        </li>
        <li className="border border-white m-2 px-2 rounded-lg hover:bg-teal-900 hover:bg-opacity-50 font-semibold">
          React
        </li>
        <li className="border border-white m-2 px-2 rounded-lg hover:bg-teal-900 hover:bg-opacity-50 font-semibold">
          Redux
        </li>
        <li className="border border-white m-2 px-2 rounded-lg hover:bg-teal-900 hover:bg-opacity-50 font-semibold">
          Tailwind CSS
        </li>
        <li className="border border-white m-2 px-2 rounded-lg hover:bg-teal-900 hover:bg-opacity-50 font-semibold">
          Jest
        </li>
        <li className="border border-white m-2 px-2 rounded-lg hover:bg-teal-900 hover:bg-opacity-50 font-semibold">
          UI/UX Design
        </li>
        <li className="border border-white m-2 px-2 rounded-lg hover:bg-teal-900 hover:bg-opacity-50 font-semibold">
          Figma
        </li>
      </ul>
      <div className="flex items-center mt-2">
        <span>Contact : </span>
        <button className="border border-white m-2 px-2 rounded-lg hover:bg-teal-600 hover:bg-opacity-50 font-semibold">
          <a href="mailto:shubhvpawar@gmail.com">Gmail</a>
        </button>
        <button className="border border-white m-2 px-2 rounded-lg hover:bg-teal-600 hover:bg-opacity-50 font-semibold">
          <a
            href="https://www.linkedin.com/in/shubhamp34"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </button>
      </div>
    </main>
  );
};

export default Hero;
