import { useState } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marketing from "../components/marketing";
import OurServices from "../components/OurServices";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import Testimonials from "../components/Testimonials";
import Tools from "../components/Tools";
import Trustby from "../components/Trustby";
import Contact from "../components/elements/Contact";
export default function Home() {
  const [openClass, setOpenClass] = useState("");

  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };
  return (
    <>
      <Header
        handleOpen={handleOpen}
        handleRemove={handleRemove}
        openClass={openClass}
        addClass="header-home7"
      />
      <Sidebar openClass={openClass} />
      <Hero />
      <Trustby />
      <OurServices />
      <Testimonials />
      <Tools />
      <Services />
      <Marketing />
      <Contact />
      <Footer />
    </>
  );
}
