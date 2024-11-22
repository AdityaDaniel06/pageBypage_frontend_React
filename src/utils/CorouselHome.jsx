import { Carousel } from "flowbite-react";
import CoroselImg_01 from "../assets/images/home-1-slider-1.webp";
import CoroselImg_02 from "../assets/images/home-1-slider-2.webp";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function CorouselHome() {
  const images = [
    { src: CoroselImg_01, alt: "Carousel Image 1" },
    { src: CoroselImg_02, alt: "Carousel Image 2" },
  ];

  return (
    <div className="h-screen w-full">
      <Carousel
        slideInterval={5000}
        indicators
        leftControl={
          <FaArrowLeft className="cursor-pointer text-4xl text-gray-700 hover:text-gray-900" />
        }
        rightControl={
          <FaArrowRight className="cursor-pointer text-4xl text-gray-700 hover:text-gray-900" />
        }
        className="rounded-none"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
}

export default CorouselHome;
