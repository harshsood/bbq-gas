import React from "react";
import certOne from "../images/certification icon with since 1971 text.jpg";


function Certifications() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Container - Images with Captions */}
          <div className="space-y-8">
            <a
              href="#link1"
              className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={certOne}
                alt="Certification 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  Al Salam Gas Distributor LLC
                </h3>
              </div>
            </a>

            <a
              href="#link2"
              className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src="/images/cert2.jpg"
                alt="Certification 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  Al Jafliyah Gas Distribution LLC
                </h3>
              </div>
            </a>
          </div>

          {/* Right Container - Logo Certificates */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
            <img
              src="/images/logo1.png"
              alt="Logo 1"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
            <img
              src="/images/logo2.png"
              alt="Logo 2"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
            <img
              src="/images/logo3.png"
              alt="Logo 3"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
            <img
              src="/images/logo4.png"
              alt="Logo 4"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
            <img
              src="/images/logo5.png"
              alt="Logo 5"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;

