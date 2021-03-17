import React, { Component } from 'react';
import axios from 'axios';

export default class IndexPosts extends Component {
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
        posts:  response.data,   
      });
        console.log(response.data)
    };
  
    // console.log(props.details)
      // const foundDetail = props.details.find(detail => {
        // console.log(detail)
        // console.log(props.match.params.id)
          // return detail.id === props.match.params.id;
      // })
  
    render() {
  
    return(
       <div className="detail-container">
           <p>Welcome to Post Index!!</p>
        <h2 className="detail-title">{this.state.posts.common_name}</h2>
        {/* <img className="detail-image" src={foundSeed.imgUrl} alt="seed" /> */}
      <div className="detail-description">
       <p>
       {'Seed Name: '+this.state.posts.name},<br></br><br></br>
       {'Seed Catagory: '+this.state.posts.catagory},<br></br><br></br>
       {'Catagory Type: '+this.state.posts.cat_type},<br></br><br></br>
       {'Detail Id: '+this.state.posts.detailId},<br></br><br></br>
       {'Botanical Name: '+this.state.posts.botan_name},<br></br><br></br>
       {'Common Name: '+this.state.posts.common_name},<br></br><br></br>
       {'Plant Type: '+this.state.posts.plant_type},<br></br><br></br>
       {'Days to Mature: '+this.state.posts.days_to_mature},<br></br><br></br>
       {'Fruit Size: '+this.state.posts.fruit_size},<br></br><br></br>
       {'Light Requirement: '+this.state.posts.light_requirement},<br></br><br></br>
       {'Planting Depth: '+this.state.posts.plant_depth},<br></br><br></br>
       {'Plant Spacing: '+this.state.posts.plant_spacing},<br></br><br></br>
       {'Planting Soil Temp: '+this.state.posts.planting_soil_temp},<br></br><br></br>
       {'Seeds per lb: '+this.state.posts.seeds_per_lb},<br></br><br></br>
       </p>
       <div>
        {/* <Link to={`/details/${detail.id}`}> */}
          {/* <img src={seed.img} alt='seedimg' /> */}
          {/* <h2 className="list-image-text">{seed.name}</h2> */}
        {/* </Link> */}
       </div>
     </div>
      {/* <a href={this.state.details.all} target="_blank"> */}
       {/* <button className="detail-link">Read More</button> */}
     {/* </a> */}
   </div>
    )
    }
  }
  

