import { Button, Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Alltoys = () => {
    const cars = useLoaderData();
    return (
        <div className="container">
        all cars : {cars.length}
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
            cars.map(toyCars=><tr key={toyCars._id}>
                <td>{toyCars.toyName}</td>
                <td>{toyCars.sellerName}</td>
                <td>{toyCars.category}</td>
                <td>${toyCars.price}</td>
                <td>{toyCars.quantity}</td>
                <td><Button variant="primary">Details</Button></td>
            </tr>)
        }
      </tbody>
    </Table>
        </div>
    );
};

export default Alltoys;