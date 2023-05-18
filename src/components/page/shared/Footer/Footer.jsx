import { Col, Row } from "react-bootstrap";
import logo from '../../../../assets/websiteLogo.png';
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-dark text-white text-center py-4">
            <div className="container">
                <div className="d-flex justify-content-center">
                <h1>Car Craze</h1>
                <img src={logo} alt="" style={{width:"90px"}} />
                </div>
                <div className="my-4">
                <Link to='/' className="me-3 text-white text-decoration-none">Home</Link>
                <Link to='/about' className="me-3 text-white text-decoration-none">About</Link>
                <Link to='/Toys' className="me-3 text-white text-decoration-none">Toys</Link>
                <Link to='/contact' className="me-3 text-white text-decoration-none">Contact</Link>
                </div>
                <div>
                    <FaTwitter className="me-4 fs-2 text-warning"></FaTwitter>
                    <FaFacebook className="me-4 fs-2 text-warning"></FaFacebook>
                    <FaInstagram className="me-4 fs-2 text-warning"></FaInstagram>
                </div>
                <p className="my-3"><small>Copyright &copy; 2023 all right reserved</small></p>
            </div>
        </div>
    );
};

export default Footer;