import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        const galleryElements = this.props.list.map((gallery, index) => {
            return  <GalleryItem
                        key={index}
                        getGalleryCallback={this.props.getGalleryCallback}
                        itemData={gallery}
                    />;
        });
        console.log(galleryElements);

        return (
            <ul>
                {galleryElements}
            </ul>
        );
    }
}

export default GalleryList;