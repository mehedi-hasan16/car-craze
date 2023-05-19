import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";



const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [toyData, setToyData] = useState([])
    const [sortOrder, setSortOrder] = useState('ascending');
    console.log(sortOrder);
    const url = `http://localhost:5000/userCas?sellerEmail=${user?.email}&sort=${sortOrder}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToyData(data))
    }, [url])
    const handleDeleteToy = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                toyDelete(id)
            }
        })


    }
    const toyDelete = (id) => {
        fetch(`http://localhost:5000/cars/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = toyData.filter(toy => toy._id != id)
                    setToyData(remaining)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
    }
    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSortOrder(value);
      };


    return (
        <div className="container min-vh-100">
            <Helmet>
                <title>Car Craze | My toy</title>
            </Helmet>
            <h2 className="text-center my-4">Total Product you have added: {toyData.length}</h2>

            <div className="my-4">
                <label htmlFor="dropdown">Sort on price:</label>
                <select id="dropdown" onChange={handleOptionChange} className="ms-2 p-1 rounded">
                    <option value="">Select</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Update & Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toyData.map(toyCars => <tr key={toyCars._id}>
                            <td>{toyCars.toyName}</td>
                            <td>{toyCars.sellerName}</td>
                            <td>{toyCars.category}</td>
                            <td>${toyCars.price}</td>
                            <td>{toyCars.quantity}</td>
                            <td>
                                <Link to={`/update/${toyCars._id}`}><Button variant="primary" >Update</Button></Link>
                                <Button onClick={() => handleDeleteToy(toyCars._id)} variant="danger" className="ms-3" >Delete</Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyToy;