import './styles.scss';
import { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='collapse' onClick={() => setIsOpen(!isOpen)}>
        {title}{' '}
        <i
          className={`fa-solid fa-chevron-up chevron ${
            isOpen ? 'chevron-down' : ''
          }`}
        />
      </div>
      <div className={isOpen ? 'collapseTextOpen' : 'collapseTextClose'}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        ) : (
          <p className='description'>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
