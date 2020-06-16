import React, {Component} from "react";
import styled from "styled-components";

import ErrorIndicator from "../error-indicator";

const ErrorBlock = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    .error-text_block{
      text-align: center;
    }
`

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        const hasError = this.state;
        if (hasError) return <ErrorIndicator/>;
        return this.props.children;
    }
}

export default ErrorBoundary;