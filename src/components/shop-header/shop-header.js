import React, {Component} from "react";
import {connect} from "react-redux";
import styled from "styled-components";

import {withBookstoreService} from "../hoc";
import {booksLoaded} from "../../actions";
import {compose} from "../../utils"
import BookListItem from "../book-list-item";

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
      font-size: 2.2rem;
      color: cadetblue;
      margin-right: 10px;
    }
  }
`

const ShopHeader = ({numItem, total}) => {
    return (
        <HeaderStyled className="row">
            <a href="#" className="logo text-dark">Restore</a>
            <a href="#" className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart">{numItem} items (${total})</i>
            </a>

        </HeaderStyled>
    )
}

export default ShopHeader;
