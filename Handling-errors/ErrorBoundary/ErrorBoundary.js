import React, { Component } from 'react';


// Error boundaries are React components that catch JavaScript errors anywhere in their child component tree,
// log those errors, and display a fallback UI instead of the component tree that crashed
class ErrorBoundary extends Component {
    
    state = {
        hasError: false,
        errorMessage: ''
    }

    // You can create an error boundary class component by defining a new lifecycle method componentDidCatch(error, errorInfo)
    // The componentDidCatch() method works like a JavaScript catch {}
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;