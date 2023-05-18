import { Button, Col, Row } from "react-bootstrap";
import bannerImg from '../../assets/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="mb-3 container">
                <Row xs={1} md={2}>
                    <Col className="my-auto">
                        <h1 className="text-white">Fuel your car craze <br /> Best online car toy selles</h1>
                        <p className="text-white my-4">Unleash your inner child with Car Craze, the ultimate destination for<br/> toy car enthusiasts. Explore a wide selection of toy cars, from sleek <br/> sports cars to rugged off-road trucks </p>
                        <Button variant="warning" className="me-3">Explore Toys</Button>
                        <Button variant="outline-dark">Signup</Button>
                    </Col>
                    <Col className="my-4 d-flex align-items-center justify-content-center">
                        <img src={bannerImg} alt="" className="img-fluid" />
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default Banner;