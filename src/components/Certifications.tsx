import React from "react";
import certOne from "../images/certification icon with since 1971 text.jpg";
import certTwo from "../images/certification icon with since 1975 text.jpg";
import certThree from "../images/sce-logo.png";
import certFour from "../images/EAFSM.png";
import certFive from "../images/download-1.png";
import certSix from "../images/hah-1.jpg";
import certSeven from "../images/civil-defence-dubai-logo1.jpg";

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
                src={certTwo}
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
              src={certThree}
              alt="Logo 1"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
            <img
              src={certFour}
              alt="Logo 2"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
            <img
              src={certFive}
              alt="Logo 3"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
            <img
              src={certSix}
              alt="Logo 4"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
            <img
              src={certSeven}
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

