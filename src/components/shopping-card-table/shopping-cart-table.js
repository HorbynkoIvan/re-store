import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";

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

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, idx) => {
        const {id, name, count, total} = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>{total}$</td>
                <td>
                    <button onClick={() => onIncrease(id)} className="btn btn-outline-success btn-small">
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button onClick={() =>  onDecrease(id)} className="btn btn-outline-warning btn-small">
                        <i className="fa fa-minus-circle"/>
                    </button>
                    <button onClick={() => onDelete(id)} className="btn btn-outline-danger btn-small">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>


                </td>
            </tr>
        )
    }
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
                {items.map(renderRow)}
                </tbody>
            </table>

            <div className="total">
                Total: {total}$
            </div>
        </ShoppingCartTableStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cardItems,
        total: state.orderTotal,
    }
};

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => console.log("onIncrease " + id),
        onDecrease: (id) => console.log("onDecrease " + id),
        onDelete: (id) => console.log("onDelete " + id),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
