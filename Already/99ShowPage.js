import React from 'react';
const ShowPage = (props) => {
  console.log(props);
  return (
    <h1>{props.birds[props.birdId].name}</h1>
  )
}
export default ShowPage;