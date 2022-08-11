import{HiMail} from "react-icons/hi";
import {FaLinkedin} from "react-icons/fa";

function Buttons() {
    return (
     <div className="but">
      <a href="/"className="btn btn1"> <span> <HiMail /> </span>Email</a>
      <a href="/"className="btn btn2"><span> <FaLinkedin /> </span>LinkedIn</a>
     </div>
    );
  }

  export default Buttons;