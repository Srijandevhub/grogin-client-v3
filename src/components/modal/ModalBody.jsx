import styles from './Modal.module.css'
const ModalBody = ({ children }) => {
    return (
        <div className={styles.modalBody}>
            { children }
        </div>
    )
}
export default ModalBody