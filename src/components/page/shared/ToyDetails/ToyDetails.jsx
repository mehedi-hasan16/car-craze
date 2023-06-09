import { Button } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const singleToy = useLoaderData();
    const { toyName, sellerName, sellerEmail, rating, category, description, photo, price, quantity } = singleToy;
    return (
        <div className="container my-4 min-vh-100">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={photo} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{toyName}</h5>
                            <p className="card-text">Price: ${price}</p>
                            <p className="card-text">Category: {category}</p>
                            <p className="card-text">Quantity: {quantity}</p>
                            <p className="card-text">Description: {description}</p>
                            <p className="card-text">Rating: <Rating
                                    placeholderRating={rating}
                                    emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                                    placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                    fullSymbol={<FaStar className="text-warning"></FaStar>}
                                /></p>
                            <p className="card-text">Seller Name: {sellerName}</p>
                            <p className="card-text">Seller Email: {sellerEmail}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="text-center">
            <Link to='/alltoy'><Button variant="primary">Back to all toy</Button></Link>
            </div> */}
        </div>

    );
};

export default ToyDetails;