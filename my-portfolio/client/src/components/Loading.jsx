import React from "react";
const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-gray-950">
      <div className="text-center">

        {/* Spinner */}
        <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-blue-500"></div>

        {/* Loading Text */}
        <h1 className="text-3xl font-bold tracking-wider text-white">
          Loading<span className="text-blue-500">...</span>
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Preparing portfolio
        </p>

      </div>
    </div>
  );
};

export default Loading;