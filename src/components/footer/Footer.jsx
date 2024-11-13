import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import Google from '../../assets/images/google-play-button-dark.png'
import ios from '../../assets/images/apple-store-button-dark.png'
const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
        <div className={styles.footerRow}>
            <div className='container'>
                <div className={styles.footerInner}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className={styles.newsletterCol1}>
                                <h3 className={styles.newsletterheading}>Join our newsletter for £10 offs</h3>
                                <p className={`${styles.newsletterText} mb-0`}>Register now to get latest updates on promotions & coupons.Don’t worry, we not spam!</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex justify-content-end'>
                                <div className={styles.newsletterCol2}>
                                    <div className={styles.newsletterFormWrapper}>
                                        <i>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                                            </svg>
                                        </i>
                                        <input type='email' placeholder='Enter your email address'/>
                                        <button>SEND</button>
                                    </div>
                                    <p>By subscribing you agree to our <Link to="/terms">Terms & Conditions and Privacy & Cookies Policy</Link>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.footerRow}>
            <div className='container'>
                <div className={styles.footerInner}>
                    <div className='row'>
                        <div className={styles.footerBottomCol1}>
                            <h4 className={styles.widgetTitle}>Do You Need Help ?</h4>
                            <p className={`${styles.widgetText} mb-4`}>For any assistance don't hassitate to connect us. Below given the details for quick assistance</p>
                            <ul className={styles.widgetMedia}>
                                <li>
                                    <i>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                                        </svg>
                                    </i>
                                    <div className={styles.contactDetails}>
                                        <span>Monday-Friday: 08am-9pm</span><br/>
                                        <Link to="tel:0800300353">0 800 300-353</Link>
                                    </div>
                                </li>
                                <li>
                                    <i>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                                        </svg>
                                    </i>
                                    <div className={styles.contactDetails}>
                                        <span>Need help with your order?</span><br/>
                                        <Link to="mailto:info@grogin.com">info@grogin.com</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerBottomCol2}>
                            <h4 className={styles.widgetTitle}>Make Money with Us</h4>
                            <ul className={styles.widgetList}>
                                <li>
                                    <Link to="#">Sell on Grogin</Link>
                                </li>
                                <li>
                                    <Link to="#">Sell Your Services on Grogin</Link>
                                </li>
                                <li>
                                    <Link to="#">Sell on Grogin Business</Link>
                                </li>
                                <li>
                                    <Link to="#">Sell Your Apps on Grogin</Link>
                                </li>
                                <li>
                                    <Link to="#">Become an Affilate</Link>
                                </li>
                                <li>
                                    <Link to="#">Advertise Your Products</Link>
                                </li>
                                <li>
                                    <Link to="#">Sell-Publish with Us</Link>
                                </li>
                                <li>
                                    <Link to="#">Become an Blowwe Vendor</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerBottomCol2}>
                            <h4 className={styles.widgetTitle}>Let Us Help You</h4>
                            <ul className={styles.widgetList}>
                                <li>
                                    <Link to="#">Accessibility Statement</Link>
                                </li>
                                <li>
                                    <Link to="#">Your Orders</Link>
                                </li>
                                <li>
                                    <Link to="#">Returns & Replacements</Link>
                                </li>
                                <li>
                                    <Link to="#">Shipping Rates & Policies</Link>
                                </li>
                                <li>
                                    <Link to="#">Refund and Returns Policy</Link>
                                </li>
                                <li>
                                    <Link to="#">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="#">Terms and Conditions</Link>
                                </li>
                                <li>
                                    <Link to="#">Cookie Settings</Link>
                                </li>
                                <li>
                                    <Link to="#">Help Center</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerBottomCol2}>
                            <h4 className={styles.widgetTitle}>Get to Know Us</h4>
                            <ul className={styles.widgetList}>
                                <li>
                                    <Link to="#">Careers for Grogin</Link>
                                </li>
                                <li>
                                    <Link to="#">About Grogin</Link>
                                </li>
                                <li>
                                    <Link to="#">Inverstor Relations</Link>
                                </li>
                                <li>
                                    <Link to="#">Grogin Devices</Link>
                                </li>
                                <li>
                                    <Link to="#">Customer reviews</Link>
                                </li>
                                <li>
                                    <Link to="#">Social Responsibility</Link>
                                </li>
                                <li>
                                    <Link to="#">Store Locations</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerBottomCol2}>
                            <h4 className={styles.widgetTitle}>Download our app</h4>
                            <div className='mb-2'>
                                <Link to="#">
                                    <img src={Google} alt='google' className={styles.downloadImage}/>
                                </Link>
                            </div>
                            <div className='mb-2'>
                                <Link to="#">
                                    <img src={ios} alt='ios' className={styles.downloadImage}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.footerRow}>
            <div className='container'>
                <div className='py-2'>
                    <p className={`${styles.widgetText} mb-0`}>All rights reserved by <strong>grogin.com</strong></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer