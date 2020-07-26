import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryList: [],
  };

  componentDidMount() {
    console.log('MOUNTED COMPONENT');
    this.getGallery();
  }

  getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
    // axios.get('/gallery')
    .then((response) => {
      console.log('GET gallery: ', response);
      this.setState({
        galleryList: response.data,
      });
    })
    .catch((err) => {
      console.log('GET error: ', err);
      alert('You Failed!!!');
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery</h1>
        </header>
        <br/>
        <GalleryList getGalleryCallback={this.getGallery} list={this.state.galleryList}/>
        
      </div>
    );
  }
}

export default App;
