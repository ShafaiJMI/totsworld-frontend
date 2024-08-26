

export default function Navbar() { 
    return (
        <>
        <header className="bg-white">
        <div className="container mx-auto px-4 sm:py-2 md:py-8 flex items-center">
        
        {/*logo*/}
        <div className="mr-auto md:w-48 flex-shrink-0">
        <a href="landing-page">
        <img className="h-8 md:h-12" src="http://api.totsworld.co.in/static/img/totsworld-logo.png" alt="Logo" />
        </a>
        </div>
        
        {/*search*/}
        <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-stone-100 rounded-md hidden xl:flex items-center">
        <select className="border-0 uppercase bg-stone-100 text-sm p-4 mr-4" name="" id="">
        <option className="">all categories</option>
        
        <option className="">category name</option>
        
        </select>
        <input className="border-0 border-gray-300 font-semibold text-sm pl-4 bg-stone-100" type="text" placeholder="I'm searching for ..."/>
        <svg className="svg-inline--fa fa-search fa-w-16 fa-9x ml-auto h-5 px-4 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
        </div>
        
        
        {/* phone number */}
        <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
        <span className="font-bold md:text-xl">+91 8003326566</span>
        <span className="font-semibold text-sm text-gray-400">Support 24/7</span>
        </div>
        
        {/* buttons */}
        <nav className="contents">
        <ul className="ml-4 xl:w-48 flex items-center justify-end">
        <li className="ml-2 lg:ml-4 relative inline-block">
        <div className="relative inline-block text-left">
        
        <div>
        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar">
        <svg className="svg-inline--fa fa-user fa-w-14 fa-9x h-9 lg:h-10 p-2 text-gray-500" aria-hidden="false" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
        </button>
        </div>
        
        <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white shadow w-44 dark:bg-gray-700 dark:divide-gray-600" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
        <div className="py-1" role="none">
        <a href="orders" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">My Orders</a>
        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Account</a>
        {/* if user is_authenticated */}
        <form method="POST" action="signout" role="none">
        <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
        </form>
        {/* else */}
        <a href="login" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Login</a>
        {/* endif */}
        </div>
        </div>

        </div>
        </li>
        {/* Wishlist button */}
        <li className="ml-2 lg:ml-4 relative inline-block">
        <a className="p" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
        <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">0{/*if user.is_authenticated %}3{% else %}0{% endif */}</div>
        <svg className="svg-inline--fa fa-heart fa-w-16 fa-9x h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
        </a>
        </li>
        {/* Cart button */}
        <li className="ml-2 lg:ml-4 relative inline-block">
        <a href="cart" className="p">
        <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">0{/* if user.is_authenticated %}12{% else %}0{% endif */}</div>
        <svg className="svg-inline--fa fa-shopping-cart fa-w-18 fa-9x h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg>
        </a>
        </li>
        </ul>
        </nav>
        
        {/* cart count */}
        <div className="ml-4 hidden sm:flex flex-col font-bold">
        <span className="text-xs text-gray-400">Your Cart</span>
        <span>₹0{/*if user.is_authenticated %}2,650{% else %}0{% endif */}</span>
        </div>
        </div>
        {/* Nav Links */}
        <div className="container font-bebas-neue mx-auto px-4 hidden md:block">
        <nav className="flex items-center justify-center">
        <a href="landing-page" className="text-gray-700 hover:text-gray-900 px-3 py-2 mx-1">Home</a>
        <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 mx-1">Baby care</a>
        <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 mx-1">Clearance sale</a>
        <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 mx-1">Winter Collection</a>
        <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 mx-1">Offers</a>
        <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 mx-1">New arrivals</a>
        {/* Add more links as needed */}
        </nav>
        </div>
        <hr></hr>
        </header>
        {/* Wishlist drawer component */}
        <div id="drawer-right-example" className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80" tabIndex="-1" aria-labelledby="drawer-right-label">
        <h5 id="drawer-right-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="svg-inline--fa fa-heart fa-w-16 fa-9x w-4 h-4 me-2.5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>Wishlist</h5>
        <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
        <span className="sr-only">Close menu</span>
        </button>
        <div className="mt-8">
        <div className="flow-root">
        <ul id="wishlist-drawer" role="list" className="-my-6 divide-y divide-gray-200">
        <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center"/>
        </div>
        
        <div className="ml-4 flex flex-1 flex-col">
        <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
        <h3>
        <a href="#">Throwback Hip Bag</a>
        </h3>
        <p className="ml-4">₹90.00</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">Salmon</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">Qty 1</p>
        
        <div className="flex">
        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
        </div>
        </div>
        </div>
        </li>
        <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center"/>
        </div>
        
        <div className="ml-4 flex flex-1 flex-col">
        <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
        <h3>
        <a href="#">Throwback Hip Bag</a>
        </h3>
        <p className="ml-4">₹90.00</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">Salmon</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">Qty 1</p>
        
        <div className="flex">
        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
        </div>
        </div>
        </div>
        </li>
        </ul>
        </div>
        </div>
        <div className="flex mx-auto my-4 item-center">
        <a href="#" className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Remove all</a>
        <svg><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
        </div>
        </div>
        </>
    );
}