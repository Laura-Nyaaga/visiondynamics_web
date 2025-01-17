

"use client"
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { BiTargetLock } from 'react-icons/bi';

const AboutUs = () => {
  const [showFullMission, setShowFullMission] = useState(false);
  const [showFullVision, setShowFullVision] = useState(false);

  const missionText = "To revolutionize healthcare delivery by empowering healthcare providers with innovative virtual assistant solutions, streamlining administrative tasks...";
  const fullMissionText = "To revolutionize healthcare delivery by empowering healthcare providers with innovative virtual assistant solutions, streamlining administrative tasks and enhancing patient care through advanced technology integration.";

  const visionText = "To be the leading provider of cutting-edge virtual assistant technology, enabling healthcare professionals to focus on what matters most...";
  const fullVisionText = "To be the leading provider of cutting-edge virtual assistant technology, enabling healthcare professionals to focus on what matters most - delivering exceptional patient care while achieving optimal operational efficiency.";

  return (
    <div className="bg-white py-16 px-4" id='about'>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-black text-4xl md:text-5xl font-bold text-center mb-3">
          About Us
        </h1>
        <h2 className="text-black text-xl md:text-2xl italic text-center mb-12">
          "Why Vision Dynamics"
        </h2>

        <div className="grid md:grid-cols-2 gap-10 px-4">
          {/* Mission Card */}
          <div className="border-2 border-teal-400 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <BiTargetLock className="text-5xl text-[#3C5CA4] mb-4" />
              <h3 className="text-black text-2xl font-bold mb-4">Mission</h3>
              <p className="text-black text-lg mb-4">
                {showFullMission ? fullMissionText : missionText}
              </p>
              <button
                onClick={() => setShowFullMission(!showFullMission)}
                className="text-[#3C5CA4] font-bold hover:text-teal-400 transition-colors"
              >
                {showFullMission ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Vision Card */}
          <div className="border-2 border-teal-400 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <FaEye className="text-5xl text-[#3C5CA4] mb-4" />
              <h3 className="text-black text-2xl font-bold mb-4">Vision</h3>
              <p className="text-black text-lg mb-4">
                {showFullVision ? fullVisionText : visionText}
              </p>
              <button
                onClick={() => setShowFullVision(!showFullVision)}
                className="text-[#3C5CA4] font-bold hover:text-teal-400 transition-colors"
              >
                {showFullVision ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;