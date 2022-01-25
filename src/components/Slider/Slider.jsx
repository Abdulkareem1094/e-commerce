import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';

// const breakPoints= [
//     { width: 1, itemsToShow: 1},
//     { width: 550, itemsToShow: 2},
//     { width: 768, itemsToShow: 3},
//     { width: 1200, itemsToShow: 1},
// ];

const Slider = () => {
  return (
      <div className='container'>
        <Carousel >
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
        </Carousel>
      </div>
  )
};

export default Slider;
