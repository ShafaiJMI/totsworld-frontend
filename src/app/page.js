import React from "react";
import CategorySlider from "../components/CategorySlider";
import ProductCard from "../components/ProductCard";


export default function Home() {
  return (
  <>
  <section>

<div id="controls-carousel" className="relative w-full z-0" data-carousel="static">
 {/* Carousel wrapper */}
  <div className="relative h-56 overflow-hidden md:h-[580px]">
      {/* for banner in banners */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
          <img src="http://api.totsworld.co.in/static/img/banner/tots-banner-1.png" loading="lazy" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
      {/* endfor */}
  </div>
  {/* Slider controls */}
  <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
      </span>
  </button>
  <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
      </span>
  </button>
</div>

</section>

{/* Category cards */}
<CategorySlider />

  {/* Feature Grid */}
  {/* component */}
  <section className="">
    <div className="flex justify-center items-center">
      
      <div className="mx-auto max-w-screen-xxl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col jusitfy-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white"></h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
            <div className="relative group flex justify-center items-center h-full w-full">
              <img className="object-center object-cover h-full w-full" src="http://api.totsworld.co.in/static/img/categories/category5.jpeg" loading="lazy" alt="girl-image" />
              <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Care</button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
            
            <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
              <div className="relative group flex justify-center items-center h-full w-full">
                <img className="object-center object-cover h-full w-full" src="http://api.totsworld.co.in/static/img/categories/category3.jpeg" alt="shoe-image" />
                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Baby Clothing</button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
              <div className="relative group flex justify-center items-center h-full w-full">
                <img className="object-center object-cover h-full w-full" src="http://api.totsworld.co.in/static/img/categories/category2.jpeg" alt="watch-image" />
                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Kids Clothing</button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </div>
            
            <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
              <img className="object-center object-cover h-full w-full" src="http://api.totsworld.co.in/static/img/categories/category4.jpeg" alt="girl-image" />
              <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    {/* feature grid ends */}
    {/* Featured Product Starts */}
    <section>
      <div className="mx-auto max-w-screen-xxl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        
        <header className="text-center">
          <h2 className="text-xl font-bold font-bebas-neue text-gray-900 sm:text-3xl">Product Collection</h2>
        </header>
        
        <ul className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard />
        </ul>
      </div>
    </section>
    
    {/* Featured category */}
    <section>
      <div className="mx-auto max-w-screen-xxl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-indigo-500 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold font-bebas-neue text-white md:text-3xl">
                Summer Sale
              </h2>
              
              <p className="hidden text-white/90 sm:mt-4 sm:block">
                30% Off.
              </p>
              
              <div className="mt-4 md:mt-8">
                <a
                href="#"
                className="inline-block border border-white bg-white px-12 py-3 text-sm font-medium text-indigo-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                Shop Now
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
          <a href="#" className="group relative block">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
              src="http://api.totsworld.co.in/static/img/categories/category3.jpeg"
              loading="lazy"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />
              
              <img
              src="http://api.totsworld.co.in/static/img/categories/category1.jpeg"
              loading="lazy"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>
            
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-medium text-gray-800">Skinny Jeans Blue</h3>
              
              <p className="mt-1.5 text-pretty text-xs text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit
                aperiam ipsum!
              </p>
              
              <span
              className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
              Shop Now
            </span>
          </div>
        </a>
        
        <a href="#" className="group relative block">
          <div className="relative h-[350px] sm:h-[450px]">
            <img
            src="http://api.totsworld.co.in/static/img/categories/category4.jpeg"
            loading="lazy"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />
            
            <img
            src="http://api.totsworld.co.in/static/img/categories/category2.jpeg"
            loading="lazy"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
          </div>
          
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-gray-800">Skinny Jeans Blue</h3>
            
            <p className="mt-1.5 text-pretty text-xs text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit
              aperiam ipsum!
            </p>
            
            <span
            className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
            Shop Now
          </span>
        </div>
      </a>
    </div>
  </div>
</div>
</section>
{/* Offer section */}
<section className="">
  {/* component */}
  <div className="relative overflow-hidden bg-white py-4">
    {/* Decorative background image and gradient */}
    <div aria-hidden="false" className="absolute inset-0">
      <div className="absolute inset-0 mx-auto w-full overflow-hidden xl:px-8">
        <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg" loading="lazy" alt="" className="h-full w-full object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-bubblegum bg-opacity-75"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-bubblegum via-bubblegum"></div>
    </div>
    
    {/* Callout */}
    <section aria-labelledby="sale-heading" className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Get 25% off during our one-time sale</h2>
        <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.</p>
        <a href="#" className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-cyan-800 sm:w-auto">Get access to our one-time sale</a>
      </div>
    </section>
    
    {/* Testimonials */}
    
  </div>
</section>
</>
  );
}
