import { Button, Card, Col } from "react-bootstrap";

const CategoryCart = ({ cars }) => {
    const {picture, name, price, rating } = cars;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <div>Price:{price}</div>
                            <div>Rating:{rating}</div>
                        </Card.Text>
                        <Button variant="primary">More Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default CategoryCart;