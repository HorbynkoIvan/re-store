import React from "react";
import styled from "styled-components";

const ErrorBlock = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    .error-text_block{
      text-align: center;
    }
`

const ErrorIndicator = () => {
    return (
        <ErrorBlock>
            <div className="error-text_block">
                <h2>Error</h2>
                <span>Something went wrong!!!</span>
            </div>
        </ErrorBlock>
    )
}

export default ErrorIndicator;