import React from 'react';
import { Link } from 'react-router-dom';

const SeedHomePg = (props) => {

  return (
    <div className="list-container">
      {props.seeds.map((detail) => (
         <div className="list-arrange" >
            <div className="list-image-text-wrapper">
              <Link to={`/details/${detail.id}`}>
                <img src={detail.img} alt='seedimg' />
                <h2 className="list-image-text">{detail.name}</h2>
              </Link>
            </div>
         </div>
      ))}
    </div>
  )
}
export default SeedHomePg;
