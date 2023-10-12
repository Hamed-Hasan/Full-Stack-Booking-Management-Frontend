import Link from "next/link";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";
import { useEffect, useState } from "react";
import Image from "next/image";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
        <Image
        src={BgShape}
        alt="bg-shape"
        className="bg-shape"
        // width={600}  
        // height={800} 
      />

          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Plan your trip now</h4>
              <h1>
                Save <span>big</span> with our car rental
              </h1>
              <p>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="hero-content__text__btns font-bold">
                <span onClick={bookBtn} className="hero-content__text__btns__book-ride">
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </span>
                <Link className="hero-content__text__btns__learn-more" href="/">
                  
                    Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                
                </Link>
              </div>
            </div>

            {/* img */}
            <Image 
            src={HeroCar} 
            alt="car-img" 
            className="hero-content__car-img" 
            width={500} 
            height={500}
          />

          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
