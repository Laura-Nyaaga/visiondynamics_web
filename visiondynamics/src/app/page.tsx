import Navbar from "./components/Navbar/navbar";
import HomePage from "./components/HomePage/homepage";
import Services from "./components/Services/services";
import Testimonials from "./components/Testimonials/testimonials";
import AboutUs from "./components/About/about";
import ContactFooter from "./components/Contact/contact";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Services/>
      <Testimonials/>
      <AboutUs/>
      <ContactFooter/>
    </div>
  );
}
