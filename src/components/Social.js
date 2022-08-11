import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Social() {
  return (
    <div className="social">
      <div className="icons">
       <a href="#"> <FaTwitterSquare /></a> 
       <a href="#"> <FaFacebookSquare /></a> 
       <a href="#"> <FaInstagramSquare /></a> 
       <a href="#"> <FaGithubSquare /></a> 
      </div>
    </div>
  );
}

export default Social;
