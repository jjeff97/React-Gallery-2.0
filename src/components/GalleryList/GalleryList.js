import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {
    render(){
        let galleryList = this.props.gallery.map((item, index) => {
        
            return (
                <div className="card-wrapper" key={item.id}>
                    <GalleryItem 
                        id={item.id}
                        title={item.title}
                        path={item.path}
                        description={item.description}
                        likes={item.likes}
                        putGallery={this.props.putGallery} />
                </div>
            )
        });

        return (
        <div className="container">
            <div className="row justify-content-center">
           {galleryList}
           </div>
        </div>
        )
    }
}

export default GalleryList;