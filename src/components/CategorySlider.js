"use client";

import { useEffect, useRef, useState } from "react";

const CategorySlider = () => {
  const sliderRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const sliderContainer = sliderContainerRef.current;

    if (slider && sliderContainer) {
      const width = sliderContainer.clientWidth;
      setSliderWidth(width);
    }
  }, []);

  const scrollSlider = (direction) => {
    let newScrollAmount = scrollAmount + direction * (sliderWidth / 10);

    newScrollAmount = Math.max(newScrollAmount, 0);
    newScrollAmount = Math.min(newScrollAmount, sliderRef.current.scrollWidth - sliderWidth);

    sliderRef.current.style.transform = `translateX(${-newScrollAmount}px)`;
    setScrollAmount(newScrollAmount);
  };
    return(
        <section>
    <div className="mx-auto max-w-screen-xxl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center">
        <h2 className="text-xl font-bold font-bebas-neue text-gray-900 sm:text-3xl">Shop By Categories</h2>
      </header>
      <div className="slider-container overflow-hidden relative">
        <div className="slider flex transition-transform duration-300 ease-in-out py-4">
          {/* Repeat the following div for each category */}
          {/* for category in categories */}
          <div className="category flex-shrink-0 mx-1 md:mx-4">
            <a href="#" className="group text-center block overflow-hidden">
              <img
              src="http://api.totsworld.co.in/static/img/categories/category1.jpeg"
              loading="lazy"
              alt=""
              className="w-24 h-24 md:h-[200px] mx-auto rounded-full md:w-[200px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="relative bg-white mt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>
              </div>
            </a>
          </div>
          {/* endfor */}
          {/* End of repeated div */}
        </div>
        <button className="slider-btn left-0 top-1/2 transform -translate-y-1/2 absolute z-10" onclick="scrollSlider(-1)">
          {/* Left navigation button icon goes here */}
        </button>
        <button className="slider-btn right-0 top-1/2 transform -translate-y-1/2 absolute z-10" onclick="scrollSlider(1)">
          {/* Right navigation button icon goes here */}
        </button>
      </div>
    </div>
  </section>
    );
}
export default CategorySlider