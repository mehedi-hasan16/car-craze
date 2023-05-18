import { useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";

const AddAtoy = () => {
    const [selectedItem, setSelectedItem] = useState('Select Car Category');
    const handleSelect = (eventKey, event) => {
        setSelectedItem(event.target.text);
    };

    const handleSubmit =event =>{
        event.preventDefault();
        const form = event.target;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.email.value;
        const toyName = form.toyName.value;
        const photo = form.photo.value;
        const category = selectedItem;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value; 

       if (rating < 0 || rating > 5 || price< 0 || quantity < 0){
        alert('please enter positive number');
        return;
       }
        const toyData ={
            sellerName, 
            sellerEmail, 
            toyName, 
            photo, 
            category, 
            price, 
            rating, 
            quantity, 
            description
        }
        console.log(toyData);
    }
    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Row xs={1} md={2}>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Seller Name</Form.Label>
                            <Form.Control type="text" name="sellerName" placeholder="Seller Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Seller Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Seller Email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Name of the toy</Form.Label>
                            <Form.Control type="text" name="toyName" placeholder="Name of toy" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name="photo" placeholder="Photo URL" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Select car Category</Form.Label>

                            <Dropdown onSelect={handleSelect}>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="w-100">
                                    {selectedItem}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className=" w-100">
                                    <Dropdown.Item >Truck</Dropdown.Item>
                                    <Dropdown.Item >Sports Car</Dropdown.Item>
                                    <Dropdown.Item >Regular Car</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price" placeholder="Price" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="number" name="rating" placeholder="Rating should be 1-5" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Available quantity</Form.Label>
                            <Form.Control type="number" name="quantity" placeholder="Available quantity" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" placeholder="Description" />
                        </Form.Group>
                    </Col>

                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddAtoy;