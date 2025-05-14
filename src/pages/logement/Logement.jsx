import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logements from '../../assets/data/logements.json';
import './styles.scss';
import Carousel from '../../components/carousel/Carousel';
import Stars from '../../components/stars/Stars';
import Collapse from '../../components/collapse/Collapse';

const Logement = () => {
  const { id } = useParams(); //récupérer l'id de l'url

  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const activeLogement = logements.find((logement) => logement.id === id);
    if (activeLogement) {
      setLogement(activeLogement);
    } else {
      navigate('/error-404');
    }
    setLoading(false);
  }, []);

  return loading ? (
    <div>En cours de chargement</div>
  ) : (
    <div className='logementDetailsContainer'>
      <Carousel pictures={logement.pictures} />
      <div className='logementDetails'>
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className='tags'>
            {logement.tags.map((tag, i) => (
              <div className='tag' key={i}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className='host'>
            <div className='hostName'>
              <p>{logement.host.name.split(' ')[0]}</p>
              <p>{logement.host.name.split(' ')[1]}</p>
            </div>
            <img
              className='hostProfilPicture'
              src={logement.host.picture}
              alt='Photo de profil du loueur'
            />
          </div>
          <Stars rate={logement.rating} />
        </div>
      </div>
      <div className='collapseContainer'>
        <div className='collapseItem'>
          <Collapse title='Description' content={logement.description} />
        </div>
        <div className='collapseItem'>
          <Collapse title='Equipements' content={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
