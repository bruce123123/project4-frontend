import React from 'react';
import { Link } from 'react-router-dom';

const SeedHomePg = (props) => {

  return (
    <div className="list-container">
      <h1>Seed Home Page</h1>
      {props.seeds.map((seed) => (
         <div className="list-arrange" key={seed.id}>
            <div className="list-image-text-wrapper">
              <Link to={`/seeds/${seed.id}`}>
                <img src={seed.img} alt='seedimg' />
                <h2 className="list-image-text">{seed.name}</h2>
              </Link>
            </div>
         </div>
      ))}
    </div>
  )
}
export default SeedHomePg;
