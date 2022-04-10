import Image from 'next/image'
import imageLoader from '../components/imageLoader'

const PhotoGalleryViewer = (props) => {
    if (props.show) {
        return (
            <div className='photo-gallery-viewer' onClick={() => props.setShowViewer(false)}>
                <Image 
                    key={props.src}
                    alt="photo-gallery-viewer-image"
                    src={props.src} 
                    width={500}
                    height={809}
                    loader={imageLoader}
                    />
            </div>
        )
    } else {
        return null
    }
}

export default PhotoGalleryViewer