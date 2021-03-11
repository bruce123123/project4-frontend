import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seed: [],
      
    };

  }
  componentDidMount = () => {
    this.getSeeds();
  };
  getSeeds = async () => {
    const response = await axios.get('http://localhost:3001/seed/all');
    this.setState({
      seeds: response.data,
    });
    
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
    const response = await axios.post('http://localhost:3001/auth/login', data);
    console.log(response);
    // console.log(data);
    // console.log(response);
  };

  render() {
    const seeds = this.state.seed.map((seed) => {
      return (
        <div className="Trouble">
          <h3>{seed.name}</h3>
          <img src={seed.img} alt='seed' />
          <p>
            {seed.catagory}, {seed.cat_type}
            <h1>Oh My</h1>
          </p>
        </div>
      );
    });
    return (
      <div className='App'>
        <form onSubmit={this.login}>
          <input
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.loginOnChange}
          />
          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.loginOnChange}
          />
          <input type='submit' value='Login' />
        </form>
        {seeds}
      </div>
    );
  }
}
export default App;