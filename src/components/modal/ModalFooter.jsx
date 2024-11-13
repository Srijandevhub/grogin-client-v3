import styles from './Modal.module.css'
const ModalFooter = ({ children }) => {
    return (
        <div className={styles.modalFooter}>
            { children }
        </div>
    )
}
export default ModalFooter