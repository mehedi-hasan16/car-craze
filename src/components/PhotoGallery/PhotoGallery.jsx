import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

const PhotoGallery = () => {
    const [images, setImages]=useState ([])
    useEffect(()=>{
        fetch('http://localhost:5000/images')
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[])
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Toy Gallery</h1>
            <ImageGallery 
            items={images} 
            showPlayButton={false}
            showFullscreenButton={false}
            autoPlay={true}
            showBullets={true}
            
            />
        </div>
    );
};

export default PhotoGallery;