import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
return(
    <div className="bg-[#1b2450] w-full px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white text-sm mt-4 md:mt-0">
            © {currentYear} Vision Dynamics. All rights reserved.
          </div>
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
              href="https://www.linkedin.com/in/vision-dynamics-a09aa033b"
              className="text-white hover:text-teal-400 transition-colors"
            >
              <FaLinkedinIn size={24} />
            </Link>
          </div>

          <Link
            href="/terms-of-service"
            className="text-white hover:text-teal-400 transition-colors"
          >
            Terms Of Service
          </Link>

          <Link
            href="/privacy-policies"
            className="text-white hover:text-teal-400 transition-colors"
          >
            Privacy & Policies
          </Link>

        

        </div>
      </div>
)
};

export default Footer