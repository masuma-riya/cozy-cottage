import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../../node_modules/swiper/swiper-bundle.min.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import slider1 from '../../../assets/images/slider1.jpg';
import slider2 from '../../../assets/images/slider2.jpg';
import slider3 from '../../../assets/images/slider3.jpg';

const Banner = () => {
    return (
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide><img src={slider1} alt="" style={{width: "100%", height: "100vh"}} /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" style={{width: "100%", height: "100vh"}} /></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="" style={{width: "100%", height: "100vh"}} /></SwiperSlide>
      </Swiper>
    );
};

export default Banner;