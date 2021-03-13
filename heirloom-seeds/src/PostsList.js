import React from 'react';
import { Link } from 'react-router-dom';

const PostsList = props => {


  return(
    <div className="list-container">
      {props.posts.map(post => (
        <div className="list-arrange" key={post.id}>
          <div className="list-image-text-wrapper">
            <Link to={`/posts/${post.id}`}>
              <img src={post.imgUrl} onError={(e) => e.target.src=".././images-error.png"} alt="post" />
              <h2 className="list-image-text">{post.name}</h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostsList;
