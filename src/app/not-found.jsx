"use client";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        
        {/* 404 Text */}
        <h1 className="text-6xl font-extrabold text-[#244D3F]">404</h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            href="/"
            className="inline-block bg-[#244D3F] text-white px-5 py-2.5 rounded-md hover:bg-[#244D3F] transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;