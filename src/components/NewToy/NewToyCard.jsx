import { Card, Col } from "react-bootstrap";
import './NewToyCard.css'
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const NewToyCard = ({ toy }) => {
    const { name, price, rating, picture } = toy;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={picture} className="image-top" />
                    <Card.Body className="text-center">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{price} <br/>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                            fullSymbol={<FaStar className="text-warning"></FaStar>}
                        /></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default NewToyCard;