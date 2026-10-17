import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 8 }, (_, index) => (
   <div className="w-full animate-pulse rounded-lg p-3">
   {/* Image placeholder */}
   <div className="h-40 w-full rounded-lg bg-gray-200"></div>

   {/* Title placeholder */}
   <div className="mt-3 h-4 w-3/4 rounded bg-gray-200"></div>

   {/* Description placeholder */}
   <div className="mt-2 h-3 w-full rounded bg-gray-200"></div>
   <div className="mt-2 h-3 w-1/2 rounded bg-gray-200"></div>
 </div>
        ))}
    </div>
  );
};

export default Shimmer;
