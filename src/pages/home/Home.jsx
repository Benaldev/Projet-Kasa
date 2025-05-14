import React from 'react';
import './styles.scss';
import logements from '../../assets/data/logements.json';
import LogementCard from '../../components/logement-card/LogementCard';
import Banner from '../../components/banner/Banner';
import bgHome from '../../assets/images/bgHome.png';

const Home = () => {
  return (
    <div>
      <Banner title='Chez vous, partout et ailleurs' image={bgHome} />
      <div className='logements'>
        {logements.map((logement) => (
          <LogementCard key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
};

export default Home;
