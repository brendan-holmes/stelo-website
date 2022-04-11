import Image from 'next/image'
import { useState } from 'react'
import imageLoader from '../components/imageLoader'

const PhotoGalleryViewer = (props) => {

    const getCurrImageIndex = () => {
        return props.images.findIndex(image => image.src === props.src);
    }

    const handleOnNextClick = () => {
        const currIndex = getCurrImageIndex()
        if (currIndex >= 0) {
            const nextImageIndex = currIndex + 1 >= props.images.length ? 0 : currIndex + 1
            props.setSrc(props.images[nextImageIndex].src);
        }
        // else error
    }

    const handleClose = () => {
        props.setShowViewer(false)
    }
    
    const handleOnPreviousClick = () => {
        const currIndex = getCurrImageIndex()
        if (currIndex >= 0) {
            const previousImageIndex = currIndex - 1 < 0 ? props.images.length - 1 : currIndex - 1
            props.setSrc(props.images[previousImageIndex].src);
        }
        // else error
    }

    if (props.show) {
        return (
            <div className='photo-gallery-viewer unselectable'>
                <div className='close-viewer-button-container'>
                    <div className='circle' onClick={handleClose}>
                        <span className='close-viewer-button'>×</span>
                    </div>
                </div>
                <div className='next-image-overlay'  onClick={handleOnNextClick}>
                    <div className='circle'>
                        <span className='next-image-button'>﹥</span>
                    </div>
                </div>
                <Image 
                    key={props.src}
                    alt="photo-gallery-viewer-image"
                    src={props.src} 
                    width={500}
                    height={809}
                    loader={imageLoader}
                    />
                <div className='previous-image-overlay' onClick={handleOnPreviousClick}>
                    <div className='circle'>
                        <span className='previous-image-button'>﹤</span>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default PhotoGalleryViewer