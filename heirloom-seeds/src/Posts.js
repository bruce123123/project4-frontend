import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
    };
    
  }
  componentDidMount = async () => {
    this.getAllPosts()

  }
  getAllPosts = async () => {
    const response = await axios.get(`http://localhost:3000/posts/${this.props.match.params.id}`);
    this.setState({
      details:  response.data,   
    });
      console.log(response.data)
  };

  render() {

  return(
    <div className="list-container">
      <h2 className="detail-title">{this.state.posts.name}</h2>
      {/* {props.posts.map(post => ( */}
        <div className="list-arrange" >
          <div className="list-image-text-wrapper">
            {/* <Link to={`/posts/${post.id}`}> */}
              {/* <img src={post.imgUrl} onError={(e) => e.target.src=".././images-error.png"} alt="post" /> */}
              {/* <h2 className="list-image-text">{post.name}</h2> */}
            {/* </Link> */}
          </div>
        </div>
        {/* )) */}
        {/* } */}
        <a href={this.state.details.all} target="_blank">
        {/* <button className="detail-link">Read More</button> */}
        </a>
    </div>
      )
    }
  }

export default Posts;
