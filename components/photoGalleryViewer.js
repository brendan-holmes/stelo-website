import Image from '../components/image'
import { useEffect, useRef } from 'react';

// This component only displays a single image, as set by its parent element
// When the next, previous or close buttons are clicked, the action is handled by the methods that are passed in by the parent element
const PhotoGalleryViewer = (props) => {

    const handleImageClick = (event) => {
        // If the user clicks outside the image, it should close the viewer
        // However, clicking the image should do nothing
        // If we don't stop propagation, the event will bubble up to parent element,
        // which is the image container
        event.stopPropagation();
    }

    // Used to direct the focus for key presses
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
            props.handleNextClick(e)
        } else if (e.keyCode === LEFT_ARROW_KEYCODE) {
            props.handlePreviousClick(e)
        } else if (e.keyCode === ESC_KEYCODE) {
            props.handleClose()
        }
    }

    if (props.show) {
        return (
            <div className='photo-gallery-viewer unselectable'
                ref={inputRef}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onClick={props.handleClose}
                >
                <div className='close-viewer-button-container'>
                    <div className='circle' onClick={props.handleClose}>
                        <span className='close-viewer-button'>×</span>
                    </div>
                </div>
                <div className='next-image-overlay'  onClick={event => props.handleNextClick(event)}>
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
                    onClick={handleImageClick}
                    />
                <div className='previous-image-overlay' onClick={event => props.handlePreviousClick(event)}>
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