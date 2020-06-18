import React, {Component} from "react";

import ErrorIndicator from "../error-indicator";

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
        console.log('error: ', error);
        console.log('info: ', info);
    }

    render() {
        const {hasError} = this.state;
        if (hasError) return <ErrorIndicator/>;

        return this.props.children;
    }
}

export default ErrorBoundary;