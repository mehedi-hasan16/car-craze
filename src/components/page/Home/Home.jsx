import Banner from "../../Banner/Banner";
import PhotoGallery from "../../PhotoGallery/PhotoGallery";
import Shopbycategory from "../../Shopbycategory/Shopbycategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Shopbycategory></Shopbycategory>
            <PhotoGallery></PhotoGallery>
            
        </div>
    );
};

export default Home;