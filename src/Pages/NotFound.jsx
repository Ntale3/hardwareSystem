import React from 'react';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
                <p className="text-gray-500 mt-2">Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className="mt-6 inline-block px-6 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-950">
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFound;