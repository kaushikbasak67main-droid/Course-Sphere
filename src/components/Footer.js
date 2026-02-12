import {AiOutlinePhone, AiOutlineMail, AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai";
import {CiLocationOn} from "react-icons/ci";
import {SiFacebook, SiLinkedin} from "react-icons/si";

function Footer(){
    return (
        <div className="footer">
            <div className="footer-box company">
                <p>EduLearnX</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua
                </p>
                <ul className="social-links">
                    <li> <SiFacebook fontSize="2.4rem" color="rgba(19, 129, 233, 0.881)" /> </li>
                    <li> <AiFillTwitterCircle fontSize="2.6rem" color="rgba(19, 129, 233, 0.881)" /> </li>
                    <li> <AiFillInstagram fontSize="2.5rem" color="rgba(236, 86, 45, 0.815)" /> </li>
                    <li> <SiLinkedin fontSize="2.2rem" color="rgba(19, 129, 233, 0.881)" /> </li>
                </ul>
            </div>
            <div className="footer-box">
                <p> Quick Links</p>
                <ul className="list-item">
                    <li>About Us</li>
                    <li>Blogs</li>
                    <li>Courses</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="footer-box">
                <p>Contact Info</p>
                <ul className="contact-details">
                    <li>
                        <AiOutlinePhone fontSize="1.5rem" />
                        <span>+91 8596345675</span>
                    </li>
                    <li>
                        <AiOutlineMail fontSize="1.5rem" />
                        <span>example@gmail.com</span>
                    </li>
                    <li>
                        <CiLocationOn fontSize="1.5rem" />
                        <span>Hyderabad, India</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;