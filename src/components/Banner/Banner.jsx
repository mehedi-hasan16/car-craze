import { Button, Col, Container, Row } from "react-bootstrap";
import bannerImg from '../../assets/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="my-3">
            <Container className="banner">
                <Row xs={1} md={2}>
                    <Col className="my-auto">
                        <h1 className="text-white">Fuel your car craze <br /> Best online car toy selles</h1>
                        <Button>Explore all toy</Button>
                    </Col>
                    <Col className="my-4">
                        <img src={bannerImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;