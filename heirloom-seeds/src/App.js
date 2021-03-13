import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import SeedHomePg from './SeedHomePg';
import DetailPg from './DetailPg';

import { Route, Link, NavLink } from 'react-router-dom';
import PostList from './PostList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeds: [],
      details: [],
      posts: []
    };
    
  }
  componentDidMount = async () => {
this.getAllSeed()

  };
  getAllSeed = async () => {
    const response = await axios.get('http://localhost:3000/Seed/all');
    this.setState({
      seeds: response.data,
      
      
    });
    console.log(response.data)
  };

  postOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  post = async (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      img: this.state.img,
      catagory: this.state.catagory,
      cat_type: this.state.cat_type,
      detailId: this.state.detailId,
      botan_name: this.state.botan_name,
      common_name: this.state.common_name,
      light_requirement: this.state.light_requirement,
      planting_soil_temp: this.state.planting_soil_temp,
      plant_depth: this.state.plant_depth,
      plant_spacing: this.state.plant_spacing,
      plant_type: this.state.plant_type,
      fruit_size: this.state.fruit_size,
      days_to_mature: this.state.days_to_mature,
      seeds_per_lb: this.state.seeds_per_lb,
    };
    console.log(data);
    
    const response = await axios.post('http://localhost:3001/post', data);
    console.log(response);
    // console.log(data);
    // console.log(response);
  };

  render() {
    const seeds = this.state.seeds.map((seed) => {
      return (
        <div className="parent">
          <nav>
            <NavLink exact to="/" activeStyle={{color: "rgb(0, 179, 255)"}}>Home</NavLink>
            <NavLink  to="/details" activeStyle={{color: "rgb(0, 179, 255)"}}>Details</NavLink>
            <NavLink to="/posts" activeStyle={{color: "rgb(0, 179, 255)"}}>Posts</NavLink>
          </nav>
          <div className="App">
            <Link to="/">Seed Home Pg</Link>
            <Route exact path="/" render={() => (
            <SeedHomePg seeds={this.state.seeds} />
            )} />
            <Route exact path="/details" render={() => (
            <DetailPg DetailPg={this.state.detailPg} />
            )} />

          {/* <h3>{seed.name}</h3> */}
          {/* <img src={seed.img} alt='seed' /> */}
          {/* <p> */}
            {/* {seed.catagory}, {seed.cat_type} */}
            {/* <h1>Oh My</h1> */}
          {/* </p> */}
          </div> 
        </div>      
      );   
    });
    return (
      <div className='App'>



        {seeds}
      </div>
    );
  }
}
export default App;