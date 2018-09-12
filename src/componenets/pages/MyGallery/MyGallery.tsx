import React, { Component } from 'react'
import Gallery from 'react-photo-gallery';
import MyPhotos from '../../../assets/images'

export class MyGallery extends Component<any, any> {

    constructor(props) {
        super(props);
    }


    render() {
        return (
              <Gallery photos={MyPhotos} />
        )
    }
}

export default MyGallery


