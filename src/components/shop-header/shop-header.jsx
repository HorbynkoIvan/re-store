import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e5e5e5;
  .logo{
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.5rem;
    padding-left: 1rem;
  }
  .shopping-cart{
    align-self: center;
    font-size: 1.3rem;
    padding-right: 1rem;
    .cart-icon{
      font-size: 1.2rem;
      color: cadetblue;
      margin-right: 10px;
    }
  }
`

const ShopHeader = ({numItem, total}) => {
    return (
        <HeaderStyled className="row">
            <Link to="/" className="logo text-dark">Restore</Link>
            <Link to="/card" className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart">{numItem} items (${total})</i>
            </Link>
        </HeaderStyled>
    )
}

export default ShopHeader;
