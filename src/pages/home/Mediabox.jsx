import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Mediabox } from "../../utils/Mediabox";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Mediabox.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 500); // Adjust the duration to match the fade transition
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? Mediabox.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 500); // Adjust the duration to match the fade transition
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden rounded-xl">
        {Mediabox.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ease-in-out ${
              fade && index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {index === currentIndex && (
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            )}
          </div>
        ))}
      </div>

      {/* Previous button */}
      {/* <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button> */}

      {/* Next button */}
      {/* <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button> */}
    </div>
  );
};

export default Slideshow;
