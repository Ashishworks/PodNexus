import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-yellow-600">🚧 Page Under Construction 🚧</h1>
      <p className="mt-4 text-gray-700 text-lg">We’re working hard to bring this page to life. Stay tuned!</p>
      <div className="mt-6 animate-bounce text-3xl">👷‍♂️👷‍♀️</div>
    </div>
  );
};

export default UnderConstruction;
