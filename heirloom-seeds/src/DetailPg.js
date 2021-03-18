import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DetailPg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
    };
    
  }
  componentDidMount = async () => {
    this.getAllDetails()

  }
  getAllDetails = async () => {
    const response = await axios.get(`http://localhost:3000/details/${this.props.match.params.id}`||`https://heriloom-seeds.herokuapp.com/details/${this.props.match.params.id}`);
    this.setState({
      details:  response.data,   
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
      <h2 className="detail-title">{this.state.details.common_name}</h2>
      {/* <img className="detail-image" src={foundSeed.imgUrl} alt="seed" /> */}
    <div className="detail-description">
     <p>{'Botanical Name: '+this.state.details.botan_name},<br></br><br></br>
     {'Plant Type: '+this.state.details.plant_type},<br></br><br></br>
     {'Days to Mature: '+this.state.details.days_to_mature},<br></br><br></br>
     {'Fruit Size: '+this.state.details.fruit_size},<br></br><br></br>
     {'Light Requirement: '+this.state.details.light_requirement},<br></br><br></br>
     {'Planting Depth: '+this.state.details.plant_depth},<br></br><br></br>
     {'Plant Spacing: '+this.state.details.plant_spacing},<br></br><br></br>
     {'Planting Soil Temp: '+this.state.details.planting_soil_temp},<br></br><br></br>
     {'Seeds per lb: '+this.state.details.seeds_per_lb},<br></br><br></br>
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

export default DetailPg;