import { Button, Card, Col } from "react-bootstrap";

const CategoryCart = ({ cars }) => {
    const { name } = cars;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        <Button variant="primary">More Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default CategoryCart;