import React from "react";

const CubeRotation = () => {
  return (
    <div className="cube-container">
      <div className="cube">
        {/* Front Face */}
        <div className="face front bg-blue-500 text-white shadow-2xl">
          Text 1 - Front
        </div>
        {/* Bottom Face */}
        <div className="face bottom bg-yellow-500 text-white shadow-2xl">
          Text 2 - Bottom
        </div>
        {/* Top Face */}
        <div className="face top bg-green-500 text-white  shadow-2xl">
          Text 3 - Top
        </div>
        {/* Back Face */}
        <div className="face back bg-red-500 text-white shadow-2xl">
          Text 4 - Back
        </div>
      </div>
    </div>
  );
};

export default CubeRotation;
