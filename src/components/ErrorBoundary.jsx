import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
                    <div className="w-full max-w-2xl space-y-4">
                        <h2 className="text-2xl font-bold text-red-500">Something went wrong</h2>
                        <p className="text-gray-300">The application encountered a critical error.</p>
                        <div className="p-4 overflow-auto bg-black/50 border border-gray-800 rounded max-h-[400px]">
                            <code className="text-sm font-mono text-red-400">
                                {this.state.error && this.state.error.toString()}
                            </code>
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 transition-colors bg-white rounded text-black hover:bg-gray-200"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
