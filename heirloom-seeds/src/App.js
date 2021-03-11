import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeds: [],
    };
  }
  componentDidMount = () => {
    this.getSeed();
  };
  getSeeds = async () => {
    const response = await axios.get('http://localhost:3001/seed/all');
    this.setState({
      seeds: response.data,
    });
  };
  loginOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  login = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);
    const response = await axios.post('http://localhost:3001/auth/login', data);
    console.log(response);
    // console.log(data);
    // console.log(response);
  };

  render() {
    const seeds = this.state.seeds.map((seed) => {
      return (
        <div>
          <h3>{seed.name}</h3>
          <img src={seed.img} alt='seed' />
          <p>
            {seed.catagory}, {seed.cat_type}
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