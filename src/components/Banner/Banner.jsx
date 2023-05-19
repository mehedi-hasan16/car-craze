import { Button, Col, Row } from "react-bootstrap";
import bannerImg from '../../assets/banner.png'
import './Banner.css'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="banner">
            <div className="container p-4">
                <Row xs={1} md={2}>
                    <Col className="py-4">
                        <div>
                        <h1 className="text-white">Fuel your car craze <br /> Best online car toy selles</h1>
                        <p className="text-white my-4">Unleash your inner child with Car Craze, the ultimate destination for<br/> toy car enthusiasts. Explore a wide selection of toy cars, from sleek <br/> sports cars to rugged off-road trucks </p>
                        <Link to='/alltoy'><Button variant="warning" className="me-3">Explore Toys</Button></Link>
                        <Link to='signup'><Button variant="outline-dark">Signup</Button></Link>
                        </div>
                    </Col>
                    <Col>
                        <img src={bannerImg} alt="" className="img-fluid" />
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default Banner;