import { useState } from 'react'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    return (
        <aside className={`${styles.sideBar} ${showSidebar ? '' : `${styles.hide}`} position-fixed top-0 left-0 vh-100 d-flex flex-column bg-primary`}>
            <ul className={`${styles.sidebarMenu} flex-grow-1 overflow-auto p-2`}>
                <li>
                    <Link className={styles.sidebarLink} to="/admin/manage-categories">Manage Categories</Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar