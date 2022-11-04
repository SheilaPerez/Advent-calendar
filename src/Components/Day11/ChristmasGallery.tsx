import { useState } from 'react';
import styles from './ChristmasGallery.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ChristmasGallery = () => {
    const [position, setPosition] = useState<number>(286);
    const images = ["christmas1.jpeg", "christmas2.jpeg", "christmas3.jpeg", "christmas4.webp", "christmas5.jpeg", "christmas6.webp"];
    const [imageIndex, setImageIndex] = useState<number>(0);

    const handleClickRight = () => {
        setImageIndex(imageIndex + 1);
        if (imageIndex === images.length -1) {
            setPosition(286);
            setImageIndex(0);
        } else {
            setPosition(position - 300);
        }
    }

    const handleClickLeft = () => {
        if (imageIndex != 0) {
            setImageIndex(imageIndex -1);
            setPosition(position + 300);     
        } 
    }

    return (
        <div className={styles.content}>
            <h1>Christmas gallery</h1>
            <div className={styles.contentCarrussel}>
            <Carousel>
                <div className={styles.galleryContent}>
                    <img src="christmas1.jpeg" />
                </div>
                <div>
                    <img src="christmas2.jpeg" />
                </div>
                <div>
                    <img src="christmas3.jpeg" />
                </div>
                <div>
                    <img src="christmas4.webp" />
                </div>
                <div>
                    <img src="christmas5.jpeg" />
                    </div>
                <div>
                    <img src="christmas6.webp" />
                </div>
            </Carousel>
            </div>
        </div>
    )
};

export default ChristmasGallery;