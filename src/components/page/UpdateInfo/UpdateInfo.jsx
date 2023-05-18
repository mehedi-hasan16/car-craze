import { Button, Col, Form, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateInfo = () => {
    const loadedInfo = useLoaderData();
    console.log(loadedInfo);
    const handleSubmit = event=>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const update ={
            price,
            quantity,
            description
        }
        fetch(`http://localhost:5000/cars/${loadedInfo._id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount>0){
                Swal.fire(
                    'Successfully!',
                    'Update toy successfully!',
                    'success'
                  )
            }
        })
    }
    return (
        <div>
            <div className="container">
            <h2 className="text-center mt-4">Update toy data</h2>
            <h4 className="text-center my-4">Toy Name: {loadedInfo.toyName}</h4>
            <Form onSubmit={handleSubmit}>
                <Row xs={1} md={2}>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price" defaultValue={loadedInfo.price} placeholder="Price" required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Available quantity</Form.Label>
                            <Form.Control type="number" name="quantity" defaultValue={loadedInfo.quantity} placeholder="Available quantity" required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" placeholder="Description" defaultValue={loadedInfo.description} required />
                        </Form.Group>
                    </Col>

                </Row>
                <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit">
                   Update info
                </Button>
                </div>
            </Form>
        </div>
        </div>
    );
};

export default UpdateInfo;