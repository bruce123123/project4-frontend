import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DeletePost extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:3000/posts/'+this.props.obj._id ||'https://heriloom-seeds.herokuapp.com/posts/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
            </td>
            <td>
            {this.props.obj.img}
            </td>
            <td>
            {this.props.obj.catagory}
            </td>
            <td>
            {this.props.obj.cat_type}
            </td>
            <td>
            {this.props.obj.detailId}
            </td>
            <td>
            {this.props.obj.botan_name}
            </td>
            <td>
            {this.props.obj.common_name}
            </td>
            <td>
            {this.props.obj.light_requirement}
            </td>
            <td>
            {this.props.obj.planting_soil_temp}
            </td>
            <td>
    {this.props.obj.plant_depth}
</td>
            <td>
            {this.props.obj.plant_spacing}
            </td>
            <td>
            {this.props.obj.plant_type}
            </td>
            <td>
            {this.props.obj.fruit_size}
            </td>
            <td>
            {this.props.obj.days_to_mature}
            </td>
            <td>
            {this.props.obj.seeds_per_lb}
            </td>
            <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
            </td>
            <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
  }
}

export default DeletePost;