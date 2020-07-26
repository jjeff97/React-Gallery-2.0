import React, { Component } from "react";
import axios from'axios';

class GalleryItem extends Component {
  revealDescription(galleryId) {
    axios({
      method: "PUT",
      url: `/gallery/count/${galleryId}`,
    })
      .then((response) => {
        console.log("GET gallery: ", response);
        this.props.getGalleryCallback();
      })
      .catch((err) => {
        console.log("GET error: ", err);
        alert("You Failed!!!");
      });
  }
  state = {
    count: 0,
    descriptionToggle: false,
  };

  likeHandler = (event) => {
    this.setState({
      count: !this.state.hide,
    });
  };

  clickChangeHandler = (event) => {
    if (this.state.descriptionToggle) {
      this.setState({
        descriptionToggle: false,
      });
    } else {
      this.setState({
        descriptionToggle: true,
      });
    }
  };

  render() {
    let description = <div></div>;

    if (this.state.descriptionToggle) {
      description = <p>{this.props.itemData.description}</p>;
    }

    return (
      <div>
        <button>
          <img
            src={this.props.itemData.path}
            onClick={this.clickChangeHandler}
          />
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Like: {this.state.count}
        </button>
        {description}
      </div>
    );
  }
}

export default GalleryItem;
