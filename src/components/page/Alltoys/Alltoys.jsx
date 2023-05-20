
import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const Alltoys = () => {
    const LoadedCars = useLoaderData();
    const [cars, setCars] = useState(LoadedCars)
    const [btnClicked, setBtnClicked] = useState(false)
    const [error, setError]= useState('')
     console.log(cars);
    const handleSeeMore = () => {
        setBtnClicked(true);
    }
    useEffect(() => {
        if (btnClicked) {

            fetch('https://car-craze-server.vercel.app/cars')
                .then(res => res.json())
                .then(data => setCars(data))
        }
    }, [btnClicked])

    const handleSearch =event =>{
        setError('')
        event.preventDefault();
        const toyName = event.target.name.value;
        fetch('https://car-craze-server.vercel.app/search',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({toyName})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.length>0){
                setCars(data)
            }else{
                setError('Searched reasult not found')
            }
        })
        
    }



    return (
        <div className="container min-vh-100">
            <Helmet>
                <title>Car Craze | All toy</title>
            </Helmet>
            <div>
                <Form onSubmit={handleSearch} className="d-flex justify-content-center mt-4">
                    <Form.Group className="w-25 me-2" controlId="formBasicPassword">
                        <Form.Control type="text" name="name" placeholder="Search with Toy Name" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        search
                    </Button>
                </Form>
                <p className="text-danger text-center fs-5 mt-2">{error}</p>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map(toyCars => <tr key={toyCars._id}>
                            <td>{toyCars.toyName}</td>
                            <td>{toyCars.sellerName}</td>
                            <td>{toyCars.category}</td>
                            <td>${toyCars.price}</td>
                            <td>{toyCars.quantity}</td>
                            <td>
                                <Link to={`/details/${toyCars._id}`}><Button variant="primary" >Details</Button></Link>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
            <div className="text-center">
                {
                    cars.length == 20
                        ? <Button onClick={handleSeeMore} variant="primary">See More</Button>
                        : ""
                }
            </div>
        </div>
    );
};

export default Alltoys;