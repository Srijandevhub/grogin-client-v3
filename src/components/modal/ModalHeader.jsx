import styles from './Modal.module.css'
const ModalHeader = ({ onClose, children }) => {
    return (
        <div className={styles.modalHeader}>
            <h1 className='mb-0 fs-6'>{ children }</h1>
            <button className={styles.modalClose} aria-label='close modal' onClick={() => onClose()}>
                <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                </svg>
            </button>
        </div>
    )
}
export default ModalHeader