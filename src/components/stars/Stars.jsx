import React, { useState, useEffect } from 'react';
import './styles.scss';

const Stars = ({ rate }) => {
  const [starArray, setStarArray] = useState([]);

  useEffect(() => {
    const newStarArray = [];
    for (let i = 0; i < 5; i++) {
      if (rate > i) {
        newStarArray.push(true);
      } else {
        newStarArray.push(false);
      }
    }
    setStarArray(newStarArray);
  }, [rate]);

  return (
    <div>
      {starArray.map((star, index) =>
        star ? (
          <i key={index} className='fa-solid fa-star star fulfilledStar '></i>
        ) : (
          <i key={index} className='fa-regular fa-star star emptyStar'></i>
        )
      )}
    </div>
  );
};

export default Stars;
