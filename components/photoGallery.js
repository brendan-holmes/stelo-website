import Image from '../components/image'
import { useState } from 'react'
import PhotoGalleryViewer from '../components/photoGalleryViewer'
import rgbDataURL from '../helpers/rgbDataURL'

export default function PhotoGallery(props) {
    const [showViewer, setShowViewer] = useState(false)
    const [viewerImage, setViewerImage] = useState({})

    const images = props.images
    const handleImageClick = (image, e) => {
        setViewerImage(image)
        setShowViewer(true)
    }

    const getViewerCurrImageIndex = () => {
        return images.findIndex(image => image.fields.file.url === viewerImage.fields.file.url);
    }

    const handleViewerNextClick = (event) => {
        event.stopPropagation();
        const currIndex = getViewerCurrImageIndex()
        if (currIndex >= 0) {
            const nextImageIndex = currIndex + 1 >= images.length ? 0 : currIndex + 1
            setViewerImage(images[nextImageIndex])
        }
    }

    const handleViewerPreviousClick = (event) => {
        event.stopPropagation();
        const currIndex = getViewerCurrImageIndex()
        if (currIndex >= 0) {
            const previousImageIndex = currIndex - 1 < 0 ? images.length - 1 : currIndex - 1
            setViewerImage(images[previousImageIndex]);
        }
    }

    const handleCloseViewer = () => {
        setShowViewer(false)
    } 

    if (images && Array.isArray(images) && images.length >= 1) {
        return (
            <>
                <div className='photo-gallery unselectable'>
                    {images.map(
                        image => (
                            <Image 
                            key={image.fields.file.url}
                            alt={image.fields.file.url}
                            src={image.fields.file.url} 
                            placeholder="blur"
                            blurDataURL={rgbDataURL(230, 230, 230)}
                            width={image.fields.file.details.image.width}
                            height={image.fields.file.details.image.height}
                            onClick={(e) => handleImageClick(image, e)}
                            />))}
                </div>
                <PhotoGalleryViewer 
                    show={showViewer} 
                    image={viewerImage}
                    handleClose={handleCloseViewer}
                    handleNextClick={handleViewerNextClick}
                    handlePreviousClick={handleViewerPreviousClick}
                />
            </>
        )
    } else {
        return (
            <div className='photo-gallery'>
                <p>No images</p>
            </div>
        );
    }
}