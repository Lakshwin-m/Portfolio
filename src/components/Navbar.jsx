import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <h1 className="text-5xl">LK</h1>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a href="https://www.linkedin.com/in/lakshwin-krishna/"target="_blank"><FaLinkedin/></a>
        <a href="https://www.instagram.com/lakshwin.kr/" target="_blank"><FaInstagram/></a>
        <a href="https://github.com/Lakshwin-m" target="_blank"><FaGithub/></a>
    </div>
  </nav>
}

export default Navbar