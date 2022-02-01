import React from 'react';
import Items from '../../data/Items';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import SlideItem from './SlideItem'
import styled from 'styled-components';
import 'swiper/css'

SwiperCore.use([Navigation]);

const SliderStyles = styled.div`
  .container{
    display: flex;
    margin: 0 5px;
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
              <SwiperSlide key={Items.id}>
                <SlideItem/>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </SliderStyles>
  )
};

export default Slider;
