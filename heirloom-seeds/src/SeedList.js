import React from 'react';
import { Link } from 'react-router-dom';

const SeedList = props => {


  return(
    <div className="list-container">
      {props.seedList.map(seed => (
        <div className="list-arrange" key={seed.id}>
          <div className="list-image-text-wrapper">
            <Link to={`/seeds/${seed.id}`}>
              <img src={seed.imageUrl} onError={(e) => e.target.src=".././images-error.png"} alt="image" />
              <h2 className="list-image-text">{seed.name}</h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SeedList;
