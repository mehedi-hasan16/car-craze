import { Col, Row } from "react-bootstrap";
import { FaMoneyBillAlt, FaPhone, FaShoppingCart } from "react-icons/fa";
import './OurServices.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const OurServices = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      
    return (
        <div className="container"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            
            <h1 className="text-center my-5">Our services</h1>
            <Row className="g-2">
                <Col className="text-center border border-2 p-4 m-1 rounded custom">
                <FaPhone className="fs-1 text-primary m-3"></FaPhone>
                <h3>Support 24/7</h3>
                <p>We are open for all time, if you need any help don't forget to contact with us.</p>
                </Col>
                <Col className="text-center border border-2 p-4 m-1 rounded custom">
                <FaShoppingCart className="fs-1 text-primary m-3"></FaShoppingCart>
                <h3>Free Shopping</h3>
                <p> where you can explore a wide range of thrilling toy cars for kids of all ages.</p>
                </Col>
                <Col className="text-center border border-2 p-4 m-1 rounded custom">
                <FaMoneyBillAlt className="fs-1 text-primary m-3"></FaMoneyBillAlt>
                <h3>Return Money</h3>
                <p>your satisfaction is our top priority. Shop with confidence knowing that we offer a hassle-free money return policy.</p>
                </Col>
            </Row>
        </div>
    );
};

export default OurServices;