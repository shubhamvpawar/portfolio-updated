import parceldelight from "../assets/images/parceldelight.png";
import bingscape from "../assets/images/bingscape.png";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Projects = () => {
  return (
    <div className="items-center mx-auto py-8 w-3/4">
      <div className="flex justify-between">
        <h3 className="font-semibold mb-4 underline">Projects</h3>
        <span>
          <Link to="/">
            <IoMdArrowRoundBack />
          </Link>
        </span>
      </div>
      <div className="mt-4">
        <div className="space-y-2 bg-black bg-opacity-20 rounded-lg p-2 m-4">
          <div className="flex">
            <div className="flex items-center justify-center md:w-1/3">
              <img
                className="w-[300px] mx-auto hidden md:block px-2"
                src={parceldelight}
                alt="Website Preview"
              ></img>
            </div>
            <div className="md:w-2/3">
              <h3 className="font-semibold underline">Parcel Delight</h3>
              <ul className="list-disc pl-3">
                <li>
                  Responsive Food Ordering Application, leveraging Swiggy API
                  integration
                </li>
                <li>HTML5, CSS3, Tailwind CSS, React.JS, Parcel.js, Redux</li>
              </ul>
              <div className="">
                <button className="border border-white m-2 px-2 rounded-lg hover:bg-teal-600 hover:bg-opacity-50 font-semibold">
                  <a
                    href="https://parcel-delights.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
                <button className="border border-white m-2 px-2 rounded-lg hover:bg-teal-600 hover:bg-opacity-50 font-semibold">
                  <a
                    href="https://github.com/shubhamvpawar/Parcel-Delights"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2 bg-black bg-opacity-20 rounded-lg p-2 m-4">
          <div className="flex">
            <div className="flex items-center justify-center md:w-1/3">
              <img
                className="w-[300px] mx-auto hidden md:block px-2"
                src={bingscape}
                alt="Website Preview"
              ></img>
            </div>
            <div className="md:w-2/3">
              <h3 className="font-semibold underline">BingScape</h3>
              <ul className="list-disc pl-3">
                <li>
                  Video streaming application with secure Google Firebase
                  authentication, incorporating Redux for managing login state
                  and movie data.
                </li>
                <li> HTML5, Tailwind CSS, ReactJS, Redux, Firebase</li>
              </ul>
              <div className="">
                <button className="border border-white m-2 px-2 rounded-lg hover:bg-teal-600 hover:bg-opacity-50 font-semibold">
                  <a
                    href="https://bingscape.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
                <button className="border border-white m-2 px-2 rounded-lg hover:bg-teal-600 hover:bg-opacity-50 font-semibold">
                  <a
                    href="https://github.com/shubhamvpawar/bingscape"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
