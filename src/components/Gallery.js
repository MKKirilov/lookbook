import React from 'react';
import'./Gallery.css';

const Gallery = () => {
  return (
    <div className='galleryCSS'>
      <h2>Gallery</h2>
      <div className="galleryImages">
      {/* Add a class name to everyImage, so you can define the size */}
      {/* Define size for images, so they are the same */}
        <img src="/images/pic1.png" className='pics' alt="Artwork 1" />
        <img src="/images/pic2.png" className='pics' alt="Artwork 2" />
        <img src="/images/pic3.png" className='pics' alt="Artwork 3" />
      </div>
    </div>
  );
};

export default Gallery;