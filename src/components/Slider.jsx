import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slide slider1'>
                        <h1 data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className='text-7xl text-center font-extrabold'>ENJOY A LUXURY <br />EXPERIENCE</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide slider5'>
                        <h1 data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="1500"
                            data-aos-delay="3000" className='text-7xl text-center font-extrabold'>IN THE PERFECT <br /> LOCATION</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className='slide slider8'>
                    <h1 data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-delay="6000"
                        className='text-7xl text-center font-extrabold'>TO RELAX & <br /> EXPLORE</h1>
                </div></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;