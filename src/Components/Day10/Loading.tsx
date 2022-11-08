import styles from './Loading.module.css';
import { BsSnow } from "react-icons/bs";
const Loading = () => {

    return (
            <div className={styles.content}>
                <h1 className={styles.title}><BsSnow color={'#81C6E8'} /> Festivities loading <BsSnow color={'#81C6E8'} /></h1>
                <div className={styles.loadingContent}>
                    <div className={styles.loadingBox}>
                        <div className={styles.loadingAnimation}>

                        </div>
                    </div>
                </div>
            </div>
    )
};

export default Loading;

