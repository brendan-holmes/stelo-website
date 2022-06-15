import Image from 'next/image'
import { useEffect, useRef } from 'react';
import imageLoader from '../components/imageLoader'

const PhotoGalleryViewer = (props) => {

    const getCurrImageIndex = () => {
        return props.images.findIndex(image => image.fields.file.url === props.image.fields.file.url);
    }

    const handleNextClick = (event) => {
        event.stopPropagation();
        const currIndex = getCurrImageIndex()
        if (currIndex >= 0) {
            const nextImageIndex = currIndex + 1 >= props.images.length ? 0 : currIndex + 1
            console.log('Setting viewer image to index: ', nextImageIndex);
            props.setImage(props.images[nextImageIndex])
        }
    }

    const handlePreviousClick = (event) => {
        event.stopPropagation();
        const currIndex = getCurrImageIndex()
        if (currIndex >= 0) {
            const previousImageIndex = currIndex - 1 < 0 ? props.images.length - 1 : currIndex - 1
            console.log('Setting viewer image to index: ', previousImageIndex);
            props.setImage(props.images[previousImageIndex]);
        }
    }

    const handleClose = () => {
        props.setShowViewer(false)
    }

    const handleImageClick = (event) => {
        event.stopPropagation();
    }

    const inputRef = useRef(null);

    useEffect(() => {
        if (props.show) {
        inputRef.current.focus();
        }
    }, [props.show]);

    const handleKeyDown = (e) => {
        console.log('keyDown');
        const RIGHT_ARROW_KEYCODE = 39
        const LEFT_ARROW_KEYCODE = 37
        const ESC_KEYCODE = 27
        
        if (e.keyCode === RIGHT_ARROW_KEYCODE) {
            handleNextClick()
        } else if (e.keyCode === LEFT_ARROW_KEYCODE) {
            handleNextClick()
        } else if (e.keyCode === ESC_KEYCODE) {
            handleClose()
        }
    }

    if (props.show) {
        return (
            <div className='photo-gallery-viewer unselectable'
                ref={inputRef}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onClick={handleClose}
                >
                <div className='close-viewer-button-container'>
                    <div className='circle' onClick={handleClose}>
                        <span className='close-viewer-button'>×</span>
                    </div>
                </div>
                <div className='next-image-overlay'  onClick={handleNextClick}>
                    <div className='circle'>
                        <span className='next-image-button'>﹥</span>
                    </div>
                </div>
                <Image 
                    key={props.image.fields.file.url}
                    alt={props.image.fields.file.url}
                    src={props.image.fields.file.url} 
                    width={props.image.fields.file.details.image.width}
                    height={props.image.fields.file.details.image.height}
                    loader={imageLoader}
                    onClick={handleImageClick}
                    />
                <div className='previous-image-overlay' onClick={handlePreviousClick}>
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