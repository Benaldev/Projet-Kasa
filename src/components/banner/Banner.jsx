import React from 'react';
import './styles.scss';

const Banner = ({ title, image }) => {
  return (
    <div className='banner' style={{ backgroundImage: `url(${image})` }}>
      <div className={`bannerHover ${title ? 'bannerHome' : 'bannerAboutUs'}`}>
        {title}
      </div>
    </div>
  );
};

export default Banner;
