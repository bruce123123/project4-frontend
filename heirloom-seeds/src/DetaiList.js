import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const DetaiList = props => {
  class DetaiList extends Component {
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
      const response = await axios.get(`http://localhost:3000/details/all`||`https://heriloom-seeds.herokuapp.com/details/all`);
      this.setState({
        details:  response.data,   
      });
        console.log(response.data)
    };

    render() {

  return(
    <div className="list-container">
       <h2 className="detail-title">{this.state.details.common_name}</h2>
      {/* {props.detaiList.map(detail => ( */}
        <div className="list-arrange" >
          <div className="list-image-text-wrapper">
            {/* <Link to={`/details/${detail.name}`}> */}
              {/* <img src={detail.imgUrl} onError={(e) => e.target.src=".././images-error.png"} alt="seed" /> */}
              <h2 className="list-image-text">
                {/* {detail.name} */}
                </h2>
            {/* </Link> */}
          </div>
        </div>
      {/* ))} */}
    </div>
  )
}
  }
export default DetaiList;
