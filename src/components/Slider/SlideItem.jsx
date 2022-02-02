import React from 'react';
import styled from 'styled-components';

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
  @media only screen and (max-width: 768px){
    .item{
      height: 200px;
    }
  }
`;

const SlideItem = ({ imageLink }) => {
  return (
      <ItemsStyles>
        <div className="item">
          <img src={imageLink} alt="1" />
        </div>
      </ItemsStyles>
  )
};

export default SlideItem;
