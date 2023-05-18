import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './CategoryCart.css'

const CategoryCart = ({ cars }) => {
    const {_id, photo, toyName, price, rating } = cars;
    console.log(cars);
    return (
        <div>
            <Col>
                <Card>
                    <div className="crop-container">
                    <Card.Img variant="top" src={photo} className="w-100 img-fluid" />
                    </div>
                    <Card.Body>
                        <Card.Title>{toyName}</Card.Title>
                        <Card.Text>
                            <div>Price: ${price}</div>
                            <div>Rating:{rating}</div>
                        </Card.Text>
                        <Link to={`/details/${_id}`}><Button variant="primary">Details</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default CategoryCart;