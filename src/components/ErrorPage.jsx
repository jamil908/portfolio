import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">Oops! The page you're looking for cannot be found.</p>
        <p className="mb-4">It might have been moved or deleted, or the URL could be incorrect.</p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
