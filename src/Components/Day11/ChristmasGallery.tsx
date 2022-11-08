import styles from './ChristmasGallery.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ChristmasGallery = () => {

    return (
        <div className={styles.content}>
                <h1 className={styles.title}>Christmas gallery</h1>
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