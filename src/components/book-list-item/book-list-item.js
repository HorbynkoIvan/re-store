import React from "react";
import styled from "styled-components";

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

const BookListItem = ({book}) => {
    const {title, author, price, coverImage} = book;
    return (
        <BookListItemStyled>
            <div className="book-cover">
                <img src={coverImage} alt=""/>
            </div>
            <div className="book-details">
                <a href="#" className="book-title">{title}</a>
                <div className="book-author">{author}</div>
                <div className="book-price">{price}$</div>
                <button className="btn btn-info">Add to card</button>
            </div>
        </BookListItemStyled>
    )
}

export default BookListItem;