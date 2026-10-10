import profilePicture from "./../assets/profile-picture.png"
import { FaInstagram, FaTiktok, FaTwitter, FaFacebook } from "react-icons/fa";
import "./../styles/Header.css"
function Header(){
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture}/>
                <h3>Muhammad Rafif</h3>
                <p>Programer - Content Creator - Reseacher</p>
                <div className="socialMedia">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTiktok /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaFacebook /></a>
                </div>
            </div>
        </header>
    );
}

export default Header;