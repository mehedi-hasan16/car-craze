import { useLoaderData } from "react-router-dom";

const Alltoys = () => {
    const cars = useLoaderData();
    return (
        <div>
        all cars : {cars.length}
        </div>
    );
};

export default Alltoys;