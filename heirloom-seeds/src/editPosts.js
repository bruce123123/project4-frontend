import React, { Component } from 'react';
import axios from 'axios';


export default class EditPosts extends Component {
    constructor(props) {
        super(props);
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
        this.state = {
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
        }
      }
      componentDidMount() {
        axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                  person_name: response.data.person_name, 
                  business_name: response.data.business_name,
                  business_gst_number: response.data.business_gst_number });
            })
            .catch(function (error) {
                console.log(error);
            })
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
        onSubmit(e) {
            e.preventDefault();
            const obj = {
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
            
            axios.post(`http://localhost:3000/posts/${this.props.match.params.id, obj}`||`https://heriloom-seeds.herokuapp.com/posts/${this.props.match.params.id, obj}`)
                .then(res => console.log(res.data));   
            
            this.props.history.push('/edit');
        }


    render() {
        return (

            <div style={{ marginTop: 10 }}>
            <h3 align="center">Edit Post</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Post Img: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.img}
                      onChange={this.onChangeImg}
                      />
                </div>
                <div className="form-group">
                    <label>Catagory: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.catagory}
                      onChange={this.onChangeCatagory}
                      />
                </div>
                <div className="form-group">
                    <label>Catagory Type: </label>
                    <input type="text" 
                    className="form-control"
                    value={this.state.cat_type}
                    onChange={this.onChangeCatType}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Edit Post" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}