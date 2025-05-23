
import React, { useEffect, useState } from "react";
import "./navbar.css";
import LogoSection from "./LogoSection";
import MenuButton from "./MenuButton";
import FullscreenMenu from "./FullscreenMenu";
import ParticleBackground from "./ParticleBackground";
import { useInView } from "react-intersection-observer";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeroContent, setShowHeroContent] = useState(false);
  const [showImageContent, setShowImageContent] = useState(false);


     /// latest change 
  const { ref: imageRef, inView: imageInView } = useInView({
  threshold: 0.3, // when 30% of image section is visible
  triggerOnce: true,
});    
  
    useEffect(() => {
  if (imageInView) {
    const timer = setTimeout(() => {
      setShowImageContent(true);
    }, 2500); // delay after scroll into view

    return () => clearTimeout(timer);
  }
}, [imageInView]);

    useEffect(() => {
  const timer1 = setTimeout(() => setShowHeroContent(true), 2500); // delay for video section
  const timer2 = setTimeout(() => setShowImageContent(true), 2500); // delay for image section

  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
  };
}, []);


  // prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    
    // Clean up on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Video Background Section */}
      <section className="hero-section">
        <video autoPlay muted loop className="background-video">
          <source src="/video5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}

        <div className="video-overlay"></div>
       {/* animation  */}

        <div className="particle-layer">
    <ParticleBackground />
       </div>

        {/* Transparent Header */}
        <div className="sticky-header">
          <div className="navbar">
            <LogoSection />
            <MenuButton onClick={() => setIsOpen(true)} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="main-content">
          {/* <div className="center-heading"> */}
           <div className={`center-heading fade-in-delayed ${showHeroContent ? "show" : ""}`}>
            <h1 className="welcome-text">Welcome to </h1>
            <h2 className="company-title">ContraTek Establishment</h2>
            <p className="subtitle">Road Construction Contractors and Porta Cabin Manufacturers</p>
          </div>
        </div>
      </section>

      {/* Image Section with Overlay Text */}
      {/* <section className="image-section"> */}
        <section className="image-section" ref={imageRef}>
        <div className="image-container">
          <img 
            src="/heavy.webp"
            alt="Construction Equipment" 
            className="hero-image"
          />
          {/* Image Overlay */}
          <div className="image-overlay"></div>

                {/* animation  */}
           <div className="particle-layer">
             <ParticleBackground />
            </div>
          
          {/* Text Content Over Image */}
          <div className="image-content">
            {/* <div className="center-heading"> */}
              <div className={`center-heading fade-in-delayed ${showImageContent ? "show" : ""}`}>
                
              <h1 className="welcome-text">We are dedicated</h1>
              <h2 className="company-title">Heavy Duty Equipment Rentals</h2>
              <p className="subtitle">We Provide Every Necessary Equipment With Professional Operators in Attractive Prices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-content">
            <h2 className="intro-title">
              Welcome to<br />
              ContraTek — Road Construction Contractors<br />
              and Porta Cabin Manufacturers
            </h2>
            
            <div className="intro-text">
              <p>
                Are you searching for the best road construction contractor Saudi Arabia? You can contact ContraTek for a wide variety of services including asphalt paving and milling, portable cabin manufacturing and heavy duty equipment rental for our customers. Our inimitable credibility and track record speaks volumes of the quality of services we offer.
              </p>
              
              <p>
                We have a team of skillful and experienced experts who know how to design customized solutions to serve the needs of each customer in a professional way. As a highly trusted road work construction company Riyadh, we are dedicated to offering finest quality services at affordable prices.
              </p>
              
              <p>
                Timely completion is a promise to our customers. We make use of most advanced equipment and technology to deliver long lasting results. ContraTek makes sincere and committed efforts to exceed the expectations of our customers. Our professionals follow ethical and transparent practices to protect clients' interests in the best possible way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Menu */}
      {isOpen && <FullscreenMenu onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default Navbar;