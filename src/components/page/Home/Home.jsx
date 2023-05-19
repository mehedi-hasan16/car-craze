import Banner from "../../Banner/Banner";
import NewToy from "../../NewToy/NewToy";
import OurServices from "../../OurServices/OurServices";
import PhotoGallery from "../../PhotoGallery/PhotoGallery";
import Shopbycategory from "../../Shopbycategory/Shopbycategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <Shopbycategory></Shopbycategory>
            <NewToy></NewToy>
            <OurServices></OurServices>
            
        </div>
    );
};

export default Home;