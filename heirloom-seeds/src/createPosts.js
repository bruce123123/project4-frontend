import React, { Component } from 'react';
import axios from 'axios';


export default class CreatePosts extends Component {
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
          seeds_per_lb: this.state.seeds_per_lb
        };
        axios.post('http://localhost:3000/posts/add', obj)
            .then(res => console.log(res.data));
        
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
      }
     
    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3>Add New Seed</h3>
            <form>
                <div className="form-group">
                    <label>Add Seed Name:  </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Seed Image: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Catagory veg,herb: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Catagory veg,herb: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Catagory veg,herb: </label>
                    <input type="text" className="form-control"/>
                </div>
                    <div className="form-group">
                    <label>Add Catagory Type: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Detail Id Num: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Botanical name: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Common Name: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Light Requirement: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Planting Soil Temp: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Planting Depth: </label>
                    <input type="text" className="form-control"/>
                </div>
                    <div className="form-group">
                    <label>Add Plant Spacing: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Plant Type: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Fruit Size: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Days to Mature: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Add Seeds Per Lb: </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add your seed" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}
            
