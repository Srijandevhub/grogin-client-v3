import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from './Categories.module.css'

import fruits from '../../assets/images/fruits-vegetables.png'

const categories = new Array(9).fill({
    title: "Fruits & Vegetables",
    image: fruits
});
const Categories = () => {
  return (
    <div className={styles.categoriesWrapper}>
        <div className='container'>
            <h2 className='page-heading'>Top Categories</h2>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper" slidesPerView={9}>
            {
                categories.map((item, index) => {
                    return (
                        <SwiperSlide>
                            <div className={styles.categoryBox}>
                                <i>
                                    <img src={item.image}/>
                                </i>
                                <h3 className={styles.categoryTitle}>{item.title}</h3>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </div>
    </div>
  )
}

export default Categories
