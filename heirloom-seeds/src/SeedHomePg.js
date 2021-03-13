import React from 'react';
import { Link } from 'react-router-dom';

const SeedHomePg = (props) => {

  return (
    <div>
      <h1>Seed Home Page</h1>
      {props.seeds.map((seed, id) => (
          <Link to={`/seeds/${seed.id}`}>
          <img src={seed.img} alt='seed' />
        </Link>
      ))}
    </div>
  )
}
export default SeedHomePg;