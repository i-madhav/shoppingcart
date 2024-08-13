import React from 'react';

const Shimmer = () => {
  return (
    <div className="animate-pulse bg-white border-black p-2 rounded-lg">
      <div className="w-24 h-24 bg-gray-300 rounded-md m-auto"></div>
      <div className="mt-4 h-6 bg-gray-300 rounded-md w-3/4"></div>
      <div className="mt-4 flex items-center space-x-3">
        <div className="h-8 bg-gray-300 rounded-md w-20"></div>
        <div className="h-8 bg-gray-300 rounded-md w-24"></div>
      </div>
    </div>
  );
};

export default Shimmer;
