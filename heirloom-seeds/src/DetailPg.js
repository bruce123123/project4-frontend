import React from 'react';

const DetailPg = props => {
    const foundDetail = props.detaiList.find(detail => {
        return detail.id === props.match.params.id;
    })

  return(
     <div className="detail-container">
      <h2 className="detail-title">{foundDetail.common_name}</h2>
      {/* <img className="detail-image" src={foundSeed.imgUrl} alt="seed" /> */}
    <div className="detail-description">
     <p>{foundDetail.fruit_size}</p>
   </div>
    <a href={foundDetail.all} target="_blank">
     <button className="detail-link">Read More</button>
   </a>
 </div>
  )
}

export default DetailPg;

{/* <div className="list-container"> */}
  {/* {props.detailPg.map(detail => ( */}
    // <div className="list-arrange" key={detail.id}>
      {/* <div className="list-image-text-wrapper"> */}
        {/* <Link to={`/details/${detail.id}`}> */}
          // <img src={detail.imageUrl} onError={(e) => e.target.src=".././images-error.png"} alt="image" />
          {/* <h2 className="list-image-text">{detail.name}</h2> */}
        {/* </Link> */}
      {/* </div> */}
    {/* </div> */}
  // ))}
{/* </div> */}
