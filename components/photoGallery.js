import Image from 'next/image'
import { useState } from 'react'
import imageLoader from '../components/imageLoader'
import PhotoGalleryViewer from '../components/photoGalleryViewer'

export default function PhotoGallery(props) {
    const [showViewer, setShowViewer] = useState(false)
    const [viewerSrc, setViewerSrc] = useState('')

    const images = props.images
    const handleImageClick = (src, e) => {
        setViewerSrc(src)
        setShowViewer(true)
    }

    if (images && Array.isArray(images) && images.length >= 1) {
        return (
            <>
                <div className='photo-gallery'>
                    {images.map(
                        image => (
                            <Image 
                            key={image.src}
                            alt="about-image"
                            src={image.src} 
                            width={500}
                            height={809}
                            loader={imageLoader} 
                            onClick={(e) => handleImageClick(image.src, e)}
                            />
                            )
                            )}
                </div>
                <PhotoGalleryViewer 
                    show={showViewer} 
                    src={viewerSrc} 
                    setShowViewer={setShowViewer}
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