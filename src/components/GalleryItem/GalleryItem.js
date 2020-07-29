import React, { Component } from "react";
import './GalleryItem.css';
import axios from 'axios';

class GalleryItem extends Component {
    state= {
        imageVisible: true,
      }
      //imageVisible helps the following function toggle whether image or description are shown
      clickToggleDescription = (event) => {
        if(this.state.imageVisible === true){
          this.setState({
            imageVisible: false,
          })
        }
        if(this.state.imageVisible === false){
          this.setState({
              imageVisible: true,
          })
        }
      }
      
      render() {
          let imgPath = this.props.path;
          let imageBox = <img src={'..'+ imgPath} alt="pix"/>
          ///imageBox toggles between image and description when clicked
          if(this.state.imageVisible === false){
            imageBox = <p>{this.props.description}</p>
      }
        
          return (
            <div className="card">
                <div className="card-img-top" onClick={this.clickToggleDescription}>{imageBox}</div>
                    <div class="card-body">
                      <div className="card-text">
                        <p>{this.props.title}</p>
                        <p>Likes: {this.props.likes}</p>
                      <button data-id={this.props.id} className="btn btn-primary" onClick={this.props.putGallery} >Like</button>
                    </div>
                </div>
          </div>
          )
      }
}

export default GalleryItem;
