import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";

const Experience = () => {
  return (
    <div className="items-center mx-auto py-8 w-3/4">
      <h3 className="font-semibold mb-4 underline">Experience</h3>
      <div className="px-0">
        <div className="px-0">
          <h2 className="font-bold">Software Developer, AMDOCS</h2>
          <h3 className="text-sm">(Nov 2021 - Jan 2024)</h3>
          <ul className="list-disc pl-5 mt-4">
            <li>
              Built cross-browser responsive web pages with HTML5, CSS3, and
              JavaScript.
            </li>
            <li>
              Created a React UI to streamline onboarding and reduce integration
              time.
            </li>
            <li>
              Automated internal processes with user interface enhancements.
            </li>
            <li>
              Ensured smooth Azure migration with comprehensive shell script
              testing.
            </li>
            <li>Mitigated vulnerabilities and reduced cloud costs by 8-10%.</li>
          </ul>
        </div>
        <div className="flex flex-wrap items-center justify-around py-4">
          <span className="p-2 flex items-center rounded-lg bg-zinc-900">
            <IoLogoJavascript color="#ece632 " size={30} />
          </span>
          <span className="p-2 flex items-center rounded-lg bg-zinc-900">
            <FaCss3Alt color="#48bce2" size={30} />
          </span>
          <span className="p-2 flex items-center rounded-lg bg-zinc-900">
            <FaHtml5 color="#f89d18" size={30} />
          </span>
          <span className="p-2 flex items-center rounded-lg bg-zinc-900">
            <FaReact color="#48bce2" size={30} />
          </span>
          <span className="p-2 flex items-center rounded-lg bg-zinc-900">
            <RiTailwindCssFill color="#48bce2" size={30} />
          </span>
          <span className="p-2 flex items-center rounded-lg bg-zinc-900">
            <FaBootstrap color="#800080" size={30} />
          </span>
          <span className="p-2 flex items-center rounded-lg bg-zinc-900">
            <FaLinux color="#ffffff" size={30} />
          </span>
          <span className="p-2 flex items-center rounded-lg bg-zinc-900">
            <SiMicrosoftazure color="#48bce2" size={30} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
