import styles from './Modal.module.css'
const Modal = ({ showModal = false, onClose, children }) => {
    return (
        <>
        <div className={`${styles.modal} ${showModal ? `${styles.show}` : ""}`}>
            <div className={styles.modalDialogue}>
                <div className={styles.modalContent}>
                    { children }
                </div>
            </div>
            <div className={`${styles.modalBackdrop} ${showModal ? `${styles.show}` : ""}`} onClick={() => onClose()}></div>
        </div>
        </>
    )
}
export default Modal;