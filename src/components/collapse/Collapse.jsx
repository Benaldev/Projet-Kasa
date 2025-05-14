import './styles.scss';
import { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='collapse' onClick={() => setIsOpen(!isOpen)}>
        {title}{' '}
        <i
          className={
            isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'
          }
        ></i>
      </div>
      <div className={isOpen ? 'collapseTextOpen' : 'collapseTextClose'}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
