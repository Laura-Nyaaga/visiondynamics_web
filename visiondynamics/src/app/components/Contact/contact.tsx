"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full">
      <div className="bg-[#6E7692] rounded-t-[20px] w-full px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-full max-w-[400px] h-[300px]">
              <Image
                src="/image/doctors.png"
                alt="Healthcare Professionals"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-8">
            <div className="text-white text-center md:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Keep In Touch with Us
              </h2>
              <h3 className="text-2xl md:text-3xl">
                And Book Your Services Now
              </h3>
            </div>

            <Link
              href="visiondynamics@gmail.com"
              className="inline-block bg-[#71C3DA] text-[#3C5CA4] font-semibold px-8 py-3 rounded-lg hover:bg-white transition-colors"
            >
              Email Us
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#253688] w-full px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <Link
              href="https://www.facebook.com/profile.php?id=61565631421869&mibextid=ZbWKwL"
              className="text-white hover:text-teal-400 transition-colors"
            >
              <FaFacebookF size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/vision_dyanamics/?igsh=MW43MTQ1bGt0ZDljNg%3D%3D#"
              className="text-white hover:text-teal-400 transition-colors"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vision-dynamics-a09aa033b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFYGd66uaTWqXQuryVDrJtw%3D%3D"
              className="text-white hover:text-teal-400 transition-colors"
            >
              <FaLinkedinIn size={24} />
            </Link>
          </div>

          <Link
            href="/privacy-policies"
            className="text-white hover:text-teal-400 transition-colors"
          >
            Privacy & Policies
          </Link>

          <div className="text-white text-sm mt-4 md:mt-0">
            © {currentYear} Vision Dynamics. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
