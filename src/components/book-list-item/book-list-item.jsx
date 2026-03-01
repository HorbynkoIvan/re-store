import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const BookListItemStyled = styled.div`
  display: flex;
  margin-top: 30px;
  .book-cover{
    width: 120px;
    margin-right: 30px;
    img{
      max-width: 100%;
    }
  }
  .book-details{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    padding-bottom: 10px;
    .book-title{
      font-size: 1.2rem;
    } 
    .book-price{
      font-size: 1.4rem;
    }
  }
`

const BookListItem = ({book, onAddedToCard}) => {
    const {id, title, author, price, coverImage} = book;
    return (
        <BookListItemStyled>
            <div className="book-cover">
                <img src={coverImage} alt=""/>
            </div>
            <div className="book-details">
                <Link to="/" className="book-title">{title}</Link>
                <div className="book-author">{author}</div>
                <div className="book-price">{price}$</div>
                <button
                    onClick={() => onAddedToCard(id)}
                    className="btn btn-info">Add to card
                </button>
            </div>
        </BookListItemStyled>
    )
}

export default BookListItem;