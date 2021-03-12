import React from 'react';
import { Link } from 'react-router-dom';

const PostList = props => {


  return(
    <div className="list-container">
      {props.postList.map(post => (
        <div className="list-arrange" key={post.id}>
          <div className="list-image-text-wrapper">
            <Link to={`/posts/${post.id}`}>
              <img src={post.imageUrl} onError={(e) => e.target.src=".././images-error.png"} alt="image" />
              <h2 className="list-image-text">{post.name}</h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList;
