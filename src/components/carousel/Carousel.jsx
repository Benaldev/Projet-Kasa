import React, { useState } from 'react';
import './styles.scss';

const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const goToNextImage = () => {
    let newIndex = index + 1;
    if (newIndex > pictures.length - 1) {
      newIndex = 0;
    }

    setIndex(newIndex);
  };

  const goToPreviousImage = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    }

    setIndex(newIndex);
  };

  return (
    <div className='carousel'>
      <img
        className='carouselPicture'
        src={pictures[index]}
        alt='Photo du logement'
      />
      {pictures.length > 1 && (
        <div>
          <i
            className='fa-solid fa-chevron-left chevron left'
            onClick={goToPreviousImage}
          ></i>
          <i
            className='fa-solid fa-chevron-right chevron right'
            onClick={goToNextImage}
          ></i>
          <span className='counter'>
            {index + 1}/{pictures.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default Carousel;
