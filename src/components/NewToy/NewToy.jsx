import { useEffect, useState } from "react";
import {Row } from "react-bootstrap";
import NewToyCard from "./NewToyCard";

const NewToy = () => {
    const [newToy, setNewToy] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/newinshop')
            .then(res => res.json())
            .then(data => setNewToy(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-center my-5">Exclusive Collection</h1>
            <Row xs={1} md={4} className="g-4">
                {
                    newToy.map(toy=><NewToyCard key={toy._id} toy={toy}></NewToyCard>)
                }
            </Row>
        </div>
    );
};

export default NewToy;