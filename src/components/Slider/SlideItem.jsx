import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/images/samsungadd.jpg'

const ItemsStyles = styled.div`
  .item{
    width: 100%;
    height: 400px;
    background-color: #ddd;
    display: inline-block;
    img{
      width: 100%;
      height: 100%;
    }
  }
`;

const Items = () => {
  return (
      <ItemsStyles>
        <div className="item">
          <img src={Img} alt="1" />
        </div>
      </ItemsStyles>
  )
};

export default Items;
