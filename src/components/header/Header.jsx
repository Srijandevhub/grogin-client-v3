import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/images/grogin-logo-dark.png'
import Modal from '../modal/Modal'
import ModalHeader from '../modal/ModalHeader'
import ModalBody from '../modal/ModalBody'
const locations = [
    {
        image: "https://cdn.britannica.com/91/110191-050-7BCFD56B/Victoria-Memorial-Hall-Kolkata-India.jpg",
        label: "Kolkata"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaGl8ZW58MHx8MHx8fDA%3D",
        label: "Delhi"
    },
    {
        image: "https://media.istockphoto.com/id/539018660/photo/taj-mahal-hotel-and-gateway-of-india.jpg?s=612x612&w=0&k=20&c=L1LJVrYMS8kj2rJKlQMcUR88vYoAZeWbYIGkcTo6QV0=",
        label: "Mumbai"
    },
    {
        image: "https://www.shutterstock.com/image-photo/marina-beach-chennai-city-tamil-600nw-1730976055.jpg",
        label: "Chennai"
    }
]
const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    const [filteredLocations, setFilteredLocations] = useState(locations);
    const [selectedLocation, setSelectedLocation] = useState("All");
    const handleCloseModal = () => {
        setModalShow(false);
    }
    const handleSelectLocation = (value) => {
        setSelectedLocation(value);
        if (localStorage.getItem("del_location")) {
            localStorage.removeItem("del_location");
        }
        localStorage.setItem("del_location", value);
        setModalShow(false);
    }
    const handleFilterLocation = (query) => {
        if (query.length === 0) {
            setFilteredLocations(locations);
        } else {
            setFilteredLocations(filteredLocations.filter(item => item.label.toLowerCase().includes(query.toLowerCase())));
        }
    }
    const [focusSearch, setFocusSearch] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("del_location")) {
            setSelectedLocation(localStorage.getItem("del_location"));
        }
    }, [])
    return (
        <header className={styles.headerWrapper}>
            <div className={`${styles.headerRow} ${styles.headerTopbar}`}>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-inline-flex align-items-center'>
                            <ul className={`${styles.headerMenu} d-flex gap-3`}>
                                <li>
                                    <Link to="/about-us" className={styles.headerLink}>About Us</Link>
                                </li>
                                <li>
                                    <Link to="/admin/dashboard" className={styles.headerLink}>Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/profile" className={styles.headerLink}>My Account</Link>
                                </li>
                            </ul>
                            <p className={`m-0 ${styles.headerText} ml-3 pl-3`}>We deliver to you every day from <strong>7:00 to 23:00</strong></p>
                        </div>
                        <div className='d-inline-flex'>
                            <ul className={`${styles.headerMenu} d-flex gap-3`}>
                                <li>
                                    <Link to="/track-order" className={styles.headerLink}>Track Order</Link>
                                </li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.headerRow}`}>
                <div className='container'>
                    <div className={`${styles.headerMain} d-flex align-items-center justify-content-between gap-3`}>
                        <div className=''>
                            <Link to="/" className={styles.siteBrand}>
                                <img src={LOGO} alt='brand'/>
                            </Link>
                        </div>
                        <div className=''>
                            <button className={styles.deliveryToBox} onClick={() => setModalShow(true)}>
                                <i className={styles.deliveryToIcon}>
                                    <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                                    </svg>
                                </i>
                                <span className={styles.deliveryToContent}>
                                    <p>Deliver To</p>
                                    <span>{selectedLocation}</span>
                                </span>
                            </button>
                        </div>
                        <div className='flex-grow-1'>
                            <div className={styles.productSearch}>
                                <input type='text' placeholder='Search for products, categories or brands...' onFocus={() => setFocusSearch(true)} onBlur={() => setFocusSearch(false)}/>
                                <button className={styles.productSearchBtn} aria-label='product-search'>
                                    <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className=''>
                            <div className='d-flex gap-3'>
                                <Link to="/login" className={styles.quickButton}>
                                    <div className={styles.actionIcon}>
                                        <svg className="w-[36px] h-[36px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        </svg>
                                    </div>
                                    <div className={styles.actionText}>
                                        Account
                                    </div>
                                </Link>
                                <Link to="/shop" className={styles.quickButton}>
                                    <div className={styles.actionIcon}>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                                        </svg>
                                    </div>
                                    <div className={styles.actionText}>
                                        Shop
                                    </div>
                                </Link>
                                <Link to="/login" className={styles.quickButton}>
                                    <div className={styles.actionIcon}>
                                        <svg className="w-[36px] h-[36px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                        </svg>
                                        <span className={styles.counter}>0</span>
                                    </div>
                                    <div className={styles.actionText}>
                                        Wishlist
                                    </div>
                                </Link>
                                <Link to="/login" className={styles.quickButton}>
                                    <div className={styles.actionIcon}>
                                        <svg className="w-[36px] h-[36px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                                        </svg>
                                        <span className={styles.counter}>0</span>
                                    </div>
                                    <div className={styles.actionText}>
                                        Cart
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal showModal={modalShow} onClose={handleCloseModal}>
                <ModalHeader onClose={handleCloseModal}>
                    Delivery to you
                </ModalHeader>
                <ModalBody>
                    <div className={styles.searchLocation}>
                        <input type='text' placeholder='Search Your Location...' onChange={(e) => handleFilterLocation(e.target.value)}/>
                    </div>
                    <ul className={styles.locationList}>
                        {
                            filteredLocations.map((location, index) => {
                                return (
                                    <li key={index}>
                                        <button className={styles.locationBtn} onClick={() => handleSelectLocation(location.label)}>
                                            <i><img src={location.image} alt={location.label}/></i>
                                            <span className={styles.locationName}>{location.label}</span>
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </ModalBody>
            </Modal>
            <div className={`${styles.searchOverlay} ${focusSearch ? `${styles.show}` : ""}`}></div>
        </header>
    )
}

export default Header