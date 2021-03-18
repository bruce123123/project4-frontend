import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SeedHomePg from './SeedHomePg';
import DetailPg from './DetailPg';
import Posts from './Posts';
import PostsList from './PostsList';
import DetaiList from './DetaiList';
import CreatePosts from './CreatePosts';
import EditPosts from './EditPosts';
import IndexPosts from './IndexPosts';

import { Route, Link, Switch, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeds: [],
      details: [],
      posts: [],
        name: '',
        img: '',
        catagory: '',
        cat_type: '',
        detailId: '',
        botan_name: '',
        common_name: '',
        light_requirement: '',
        planting_soil_temp: '',
        plant_depth: '',
        plant_spacing: '',
        plant_type: '',
        fruit_size: '',
        days_to_mature: '',
        seeds_per_lb: '',
    };
    
  this.onChangeName = this.onChangeName.bind(this);
  this.onChangeImg = this.onChangeImg.bind(this);
  this.onChangeCatagory = this.onChangeCatagory.bind(this);
  this.onChangeCatType = this.onChangeCatType.bind(this);
  this.onChangeDetailId = this.onChangeDetailId.bind(this);
  this.onChangeBotanName = this.onChangeBotanName.bind(this);
  this.onChangeCommonName = this.onChangeCommonName.bind(this);
  this.onChangeLightRequirement = this.onChangeLightRequirement.bind(this);
  this.onChangePlantingSoilTemp = this.onChangePlantingSoilTemp.bind(this);
  this.onChangePlantDepth = this.onChangePlantDepth.bind(this);
  this.onChangePlantSpacing = this.onChangePlantSpacing.bind(this);
  this.onChangePlantType = this.onChangePlantType.bind(this);
  this.onChangeFruitSize = this.onChangeFruitSize.bind(this);
  this.onChangeDaysToMature = this.onChangeDaysToMature.bind(this);
  this.onChangeSeedsPerLb = this.onChangeSeedsPerLb.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

}
componentDidMount = async () => {
  this.getAllSeed()
  
    };
    getAllSeed = async () => {
      const response = await axios.get('http://localhost:3000/seed/all'||'https://heriloom-seeds.herokuapp.com/seed/all');
      this.setState({
        seeds: response.data,
          
      });
      // console.log(response.data)
    }
onChangeName(e) {
this.setState({
  name: e.target.value
});
}
onChangeImg(e) {
this.setState({
  img: e.target.value
})  
}
onChangeCatagory(e) {
this.setState({
  catagory: e.target.value
})
}
onChangeCatType(e) {
    this.setState({
      cat_type: e.target.value
})
}
onChangeDetailId(e) {
    this.setState({
    detailId: e.target.value
})
}
onChangeBotanName(e) {
    this.setState({
    botan_name: e.target.value
})
}
onChangeCommonName(e) {
  this.setState({
  common_name: e.target.value
})
}
onChangeLightRequirement(e) {
  this.setState({
  light_requirement: e.target.value
})
}
onChangePlantingSoilTemp(e) {
  this.setState({
  planting_soil_temp: e.target.value
})
}
onChangePlantDepth(e) {
  this.setState({
  plant_depth: e.target.value
})
}
onChangePlantSpacing(e) {
  this.setState({
  plant_spacing: e.target.value
})
}
onChangePlantType(e) {
  this.setState({
  plant_type: e.target.value
})
}
onChangeFruitSize(e) {
  this.setState({
  fruit_size: e.target.value
})
}
onChangeDaysToMature(e) {
  this.setState({
  days_to_mature: e.target.value
})
}
onChangeSeedsPerLb(e) {
  this.setState({
  seeds_per_lb: e.target.value
})
}
async onSubmit(e) {
  e.preventDefault();
  console.log(`The values are ${this.state.name}, ${this.state.catagory}, and ${this.state.cat_type}`)
  this.setState({
    name: '',
    img: '',
    catagory: '',
    cat_type: '',
    detailId: '',
    botan_name: '',
    common_name: '',
    light_requirement: '',
    planting_soil_temp: '',
    plant_depth: '',
    plant_spacing: '',
    plant_type: '',
    fruit_size: '',
    days_to_mature: '',
    seeds_per_lb: '',
  })

    // console.log(data);
    // 
    // const response = await axios.post('http://localhost:3000/post', data);
    // console.log(response);
    // console.log(data);
    // console.log(response);
  };

  render() {
    const seeds = this.state.seeds.map((seed) => {
      return (
        <div className="container">
          <nav>
            <NavLink exact to="/" activeStyle={{color: "rgb(0, 179, 255)"}}>Home</NavLink>
            <NavLink  to="/createposts" activeStyle={{color: "rgb(0, 179, 255)"}}>Create Post</NavLink>
            <NavLink to="/posts" activeStyle={{color: "rgb(0, 179, 255)"}}>Posts</NavLink>
          </nav>
          <div className="main">
            {/* <Link to="/">Seed Home Pg</Link> */}
            <Route exact path="/" render={() => (
            <SeedHomePg seeds={this.state.seeds} />
            )} />
            <Route exact path="/details" render={() => (
            <DetaiList detaiList={this.state.detaiList} />
            )} />
            <Route path="/details/:id" render={(routerProps) => (
            <DetailPg
            // details={this.state.details}
            {...routerProps}
            />
            )} />
            <Switch>
              <Route exact path='/createPosts' component={ CreatePosts } />
              <Route path='/editPosts/:id' component={ EditPosts } />
              <Route path='/indexPosts' component={ IndexPosts } />
            </Switch>

            <Route exact path="/posts" render={() => (
            <IndexPosts posts={this.state.posts}  />
            // noPicture={this.noPicture}
            )} />

            <Route path="/posts/:id" render={(routerProps) => (
            <Posts
            // posts={this.state.posts}
            {...routerProps}
            />
            )} />
            
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