import Image from 'next/image'
import imageLoader from '../components/imageLoader'

export default function PhotoGallery(props) {
    const images = props.images
    if (images && Array.isArray(images) && images.length >= 1) {
        return (
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
                            />
                    )
                )}
            </div>
        )
    } else {
        return (
            <div className='photo-gallery'>
                <p>No images</p>
            </div>
        );
    }
}