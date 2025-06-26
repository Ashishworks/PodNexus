import React from "react";

function Home() {
  return (
    <div className="relative w-full">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video00.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-5xl font-bold">Welcome to PodNexus</h1>
        <p className="mt-4 text-xl">Your favorite podcast discovery platform</p>
      </div>
    </div>
  );
}

export default Home;
