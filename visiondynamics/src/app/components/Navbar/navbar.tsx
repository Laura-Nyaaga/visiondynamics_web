"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <section>
      <nav className="relative text-[#253688] z-50 max-w-full pb-10 px-4 md:px-8 lg:px-16 mx-16">
        <div className="flex justify-between gap-7 items-center max-w-7xl">
          <Link href="#home">
            <Image
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[150px] lg:h-[150px] mr-10"
              src="/image/logo.png"
              alt="logo"
              width={150}
              height={150}
            />
          </Link>

          <button
            className="lg:hidden p-2 text-[#84CBEB] z-50"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
          </button>

          <ul className="hidden lg:flex items-center gap-8 text-xl xl:text-2xl text-[#253688]">
            <li className="hover:text-[#84CBEB] active:text-[#84CBEB]">
              <Link href="#home">Home</Link>
            </li>
            <li className="hover:text-[#84CBEB] active:text-[#84CBEB]">
              <Link href="#services">Services</Link>
            </li>
            <li className="hover:text-[#84CBEB] active:text-[#84CBEB]">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:text-[#84CBEB] active:text-[#84CBEB]">
              <Link href="#contact">Contact Us</Link>
            </li>
          </ul>

          <div
            className={`lg:hidden fixed inset-0 bg-[#757E9A] bg-opacity-95 z-40 transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            <div className="flex items-center justify-center h-full">
              <ul className="flex flex-col items-center space-y-8 text-2xl">
                <li className="transform hover:scale-110 transition-transform hover:text-[#84CBEB] active:text-[#84CBEB]">
                  <Link href="#about" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li className="transform hover:scale-110 transition-transform hover:text-[#84CBEB] active:text-[#84CBEB]">
                  <Link href="#skills" onClick={toggleMenu}>
                    Services
                  </Link>
                </li>
                <li className="transform hover:scale-110 transition-transform hover:text-[#84CBEB] active:text-[#84CBEB]">
                  <Link href="#projects" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li className="transform hover:scale-110 transition-transform hover:text-[#84CBEB] active:text-[#84CBEB]">
                  <Link href="#contact" onClick={toggleMenu}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     if (!isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   };

//   return (
//     <>
//       <nav className="relative text-[#253688] z-50 w-full mx-6">
//         <div className="flex justify-evenly items-center">
//             <Link href="#logo">
//               <Image
//                 className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[100px] lg:h-[100px]"
//                 src="/image/logo.png"
//                 alt="logo"
//                 width={300}
//                 height={150}
//               />
//             </Link>

//           <button
//             className="lg:hidden p-2 text-[#84CBEB] z-50"
//             onClick={toggleMenu}
//             aria-label="Toggle Menu"
//           >
//             {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
//           </button>

//           <ul className="hidden lg:flex justify-between space-x-12 text-[36px] xl:text-2xl text-[#253688]">
//             <li className="hover:text-[#84CBEB] active:text-[#84CBEB]">
//               <Link href="#about">Home</Link>
//             </li>
//             <li className="hover:text-[#84CBEB] active:text-[#84CBEB]">
//               <Link href="#skills">Services</Link>
//             </li>
//             <li className="hover:text-[#84CBEB] active:text-[#84CBEB]">
//               <Link href="#projects">About</Link>
//             </li>
//             <li className="hover:text-[#84CBEB] active:text-[#84CBEB]">
//               <Link href="#contact">Contact Us</Link>
//             </li>
//           </ul>
//         </div>

//         <div
//           className={`lg:hidden fixed inset-0 bg-[#757E9A] bg-opacity-95 z-40 transition-all duration-300 ease-in-out ${
//             isMenuOpen
//               ? "opacity-100 visible"
//               : "opacity-0 invisible pointer-events-none"
//           }`}
//         >
//           <div className="flex items-center justify-center h-full">
//             <ul className="flex flex-col items-center space-y-8 text-2xl">
//               <li className="transform hover:scale-110 transition-transform hover:active:text-[#84CBEB] active:text-[#84CBEB]">
//                 <Link href="#about" onClick={toggleMenu}>
//                   Home
//                 </Link>
//               </li>
//               <li className="transform hover:scale-110 transition-transform hover:active:text-[#84CBEB] active:active:text-[#84CBEB]">
//                 <Link href="#skills" onClick={toggleMenu}>
//                   Services
//                 </Link>
//               </li>
//               <li className="transform hover:scale-110 transition-transform hover:text-[#84CBEB] active:text-[#84CBEB]">
//                 <Link href="#projects" onClick={toggleMenu}>
//                   About
//                 </Link>
//               </li>
//               <li className="transform hover:scale-110 transition-transform hover:text-[#84CBEB] active:text-[#84CBEB]">
//                 <Link href="#contact" onClick={toggleMenu}>
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };
// export default Navbar;

{
  /* <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded">
Get In Touch
</button> */
}
