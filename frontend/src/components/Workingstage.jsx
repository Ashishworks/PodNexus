import React from 'react';

const UnderConstruction = () => {
  return (
    <>
    <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video01.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-4xl font-bold text-yellow-600">🚧 Page Under Construction 🚧</h1>
      <p className="mt-4 text-white-700 text-lg">We’re working hard to bring this page to life. Stay tuned!</p>
      <div className="mt-6 animate-bounce text-3xl">👷‍♂️👷‍♀️</div>
      </div>
    </>
  );
};

export default UnderConstruction;
