import React from 'react';
import { Link } from 'react-router-dom';

const DetailPg = props => {


  return(
    <div className="list-container">
      {props.detailPg.map(detail => (
        <div className="list-arrange" key={detail.id}>
          <div className="list-image-text-wrapper">
            <Link to={`/details/${detail.id}`}>
              <img src={detail.imageUrl} onError={(e) => e.target.src=".././images-error.png"} alt="image" />
              <h2 className="list-image-text">{detail.name}</h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DetailPg;
