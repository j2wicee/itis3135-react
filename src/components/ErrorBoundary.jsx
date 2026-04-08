import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("React ErrorBoundary caught an exception:", error);
    console.error("Component stack:", errorInfo?.componentStack ?? "No stack");
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{ padding: "20px" }}>
          <h2>Something went wrong.</h2>
          <p>Check the browser console for the full error and stack trace.</p>
        </main>
      );
    }

    return this.props.children;
  }
}

