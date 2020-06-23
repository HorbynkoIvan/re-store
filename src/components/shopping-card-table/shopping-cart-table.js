import React, {Component} from "react";
import styled from "styled-components";

const ShoppingCartTableStyled = styled.div`
  .total{
    text-align: right;
    font-size: 1rem;
    margin-right: 10px;    
  }
  button{
    margin-right: 5px;
    margin-left: 5px;
  }
`

const ShoppingCartTable = ({numItem, total}) => {
    return (
        <ShoppingCartTableStyled>
            <h2>Your order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>1</td>
                    <td>Site Reliability Engineering</td>
                    <td>2</td>
                    <td>40$</td>
                    <td>
                        <button className="btn btn-outline-danger btn-small">
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-outline-success btn-small">
                            <i className="fa fa-plus-circle"/>
                        </button>
                        <button className="btn btn-outline-warning btn-small">
                            <i className="fa fa-minus-circle"/>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>

            <div className="total">
                Total: 205$
            </div>
        </ShoppingCartTableStyled>
    )
}

export default ShoppingCartTable;
