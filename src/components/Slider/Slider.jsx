import React from 'react';
import Items from '../../assets/data/Items';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import SlideItem from './SlideItem'
import styled from 'styled-components';
import 'swiper/css/bundle'

SwiperCore.use([Navigation]);

const SliderStyles = styled.div`
  .container{
    display: flex;
    margin: 0 5px 10px 5px;
    gap: 3rem;
  }
  .swiper-button-prev,
  .swiper-button-next{
    color: orange;
  }
`;

const Slider = () => {
  return (
    <SliderStyles>
      <div className='container'>
        <Swiper
        slidesPerView={1} navigation
        >
          {Items.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <SlideItem 
                imageLink={item.image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </SliderStyles>
  )
};

export default Slider;
