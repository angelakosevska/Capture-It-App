import "./style.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper bg-animation gradient-animation">
        <div className="container-footer">
          <a href="#" className="icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="icon">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" className="icon">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="#" className="icon">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" className="icon">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="copy">
          <CopyrightIcon /> 2024
    
        </div>
      </footer>
    </>
  );
};
export default Footer;
