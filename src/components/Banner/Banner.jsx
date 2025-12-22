import React from 'react';

const Banner = () => {
    return (
      <div className="relative bg-teal-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="bg-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase inline-block mb-4">
              #1 Trusted Care Platform
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Professional Care for <br />
              <span className="text-teal-600">Your Loved Ones</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Trusted babysitters, elderly companions, and specialized nurses at
              your doorstep. Book secure and reliable care services in minutes.
            </p>
            <div className="flex justify-center gap-4">
              <button
                // onClick={() =>
                //   document
                //     .getElementById("services")
                //     .scrollIntoView({ behavior: "smooth" })
                // }
                className="bg-teal-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-teal-700 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
              >
                Find a Caretaker
              </button>
              <button className="bg-white text-teal-600 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-gray-50 border border-teal-100 shadow-sm transition cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
    );
};

export default Banner;