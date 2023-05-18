import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryCart = ({ cars }) => {
    const {_id, picture, name, price, rating } = cars;
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
                        <Link to={`/details/${_id}`}><Button variant="primary">More Details</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default CategoryCart;