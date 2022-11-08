import { FC } from 'react';
import styles from './Modal.module.css';
interface Props {
    handleClickCloseModal: () => void;
    children: any;
}
const Modal: FC<Props> = ({ handleClickCloseModal, children }) => {
    
    const stopPropagation = (e:any) => {
        e.stopPropagation();
    }

    return (
        <div className={styles.containerModal} onClick={handleClickCloseModal}>
            <div className={styles.modal} onClick={stopPropagation}>
                <button type="button" onClick={handleClickCloseModal} className={styles.closeButton}>X</button>
                {children}
            </div>
        </div>
    )
};

export default Modal;