import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
  return (
    <div>
      <h1>HomePage</h1>
      {props.birds.map((bird, id) => (
        <Link to={"/bird/" + id}>
          <img src={bird.image} alt="bird" />
        </Link>
      ))}
    </div>
  )
}
export default HomePage;