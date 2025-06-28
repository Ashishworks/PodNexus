import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="relative pt-16 min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video01.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-0"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white min-h-[calc(100vh-4rem)] px-4 text-center">
        <h1 className="text-4xl font-bold text-yellow-600">🚧 Page Under Construction 🚧</h1>
        <p className="mt-4 text-white text-lg">
          We’re working hard to bring this page to life. Stay tuned!
        </p>
        <div className="mt-6 animate-bounce text-3xl">👷‍♂️👷‍♀️</div>
      </div>
    </div>
  );
};

export default UnderConstruction;
