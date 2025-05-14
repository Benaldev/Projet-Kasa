import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const LogementCard = ({ logement }) => {
  return (
    <Link to={`/logement/${logement.id}`} className='logementCardContainer'>
      <div
        className='logementCard'
        style={{ backgroundImage: `url(${logement.cover})` }}
      >
        <div className='logementCardHover'>
          <h2>{logement.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default LogementCard;
