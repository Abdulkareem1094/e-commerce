import React from 'react'
import styled from 'styled-components';

const SearchStyles = styled.div`
  .cont{
    display: inline-block;
    float: right;
    margin-right: 5%;
    input {
      width: 200px;
      height: 30px;
      border: 2px solid #b30059;
      border-radius: 15px;
      padding: 5px;
      color: #b30059;
    }
  }
  hr{
    margin: 0 5%;
    border: 1px solid #b30059;
  }
`;

const Categories = () => {
  return (
    <SearchStyles>
      <div className="cont">
        <input type="search" name="Search" id="" placeholder='Search'/>
      </div>
      <hr/>
    </SearchStyles>
  )
};

export default Categories;
