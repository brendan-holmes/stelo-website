import Image from 'next/image'
import { useState } from 'react'
import imageLoader from '../components/imageLoader'
import PhotoGalleryViewer from '../components/photoGalleryViewer'
import rgbDataURL from '../components/rgbDataURL'

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
                <div className='photo-gallery unselectable'>
                    {images.map(
                        image => (
                            <Image 
                            key={image.src}
                            alt={image.src}
                            src={image.src} 
                            placeholder="blur"
                            blurDataURL={rgbDataURL(230, 230, 230)}
                            width={500}
                            height={809}
                            loader={imageLoader} 
                            onClick={(e) => handleImageClick(image.src, e)}
                            />))}
                </div>
                <PhotoGalleryViewer 
                    show={showViewer} 
                    src={viewerSrc}
                    setSrc={setViewerSrc}
                    images={images}
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