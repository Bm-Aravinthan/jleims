import React , {useState} from 'react'
import './Gallery.css'
import {images} from '../../constants/index';


const GalleryView = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const image = [
        {
            id: 1,
            src: images.Gallery_1,
            alt: 'image1'
        },
        {
            id: 2,
            src: images.Gallery_2,
            alt: 'image2'
        },
        {
            id: 3,
            src: images.Gallery_3,
            alt: 'image3'
        },
        {
            id: 4,
            src: images.Gallery_4,
            alt: 'image4'
        },
        {
            id: 5,
            src: images.Gallery_5,
            alt: 'image5'
        },
        {
            id: 6,
            src: images.Gallery_6,
            alt: 'image6'
        }
    ]
    const openImageFullScreen = (imageId) => {
        setSelectedImage(image.find((img) => img.id === imageId));
      };
    
      const closeFullScreen = () => {
        setSelectedImage(null);
      };
    
      return (
        <div>
            <div className="gallery-title">
                <h1>Gallery</h1>
            </div>
        <div className="gallery-container">
          {image.map((img) => (
            <div className="gallery-item" key={img.id} onClick={() => openImageFullScreen(img.id)}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
    
          {selectedImage && (
            <div className="fullscreen-overlay">
              <span className="close-icon" onClick={closeFullScreen}>
                &times;
              </span>
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>
          )}
        </div>
        </div>
      );
    };
    
    export default GalleryView;
