const Catalogue = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/catalogue/');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const CatalogueData = await response.json();

    return (
      <div className="container-2xl mx-auto px-8 py-8">
        <div className="flex justify-center items-center">
          <div className="mx-auto max-w-screen-xxl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="flex flex-col justify-center items-center space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">

                <div className="col-span-2 relative group flex justify-center items-center">
                  <img className="rounded-2xl object-center object-cover h-full w-full" src="http://api.totsworld.co.in/static/img/categories/category5.jpeg" loading="lazy" alt="girl-image" />
                  <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Care
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50">some text</div>
                </div>

                <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                  <div className="relative group flex justify-center items-center">
                    <img className="rounded-2xl object-center object-cover h-full w-full" src="http://api.totsworld.co.in/static/img/categories/category3.jpeg" alt="shoe-image" />
                    <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                      Baby Clothing
                    </button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                  </div>
                  <div className="relative group flex justify-center items-center">
                    <img className="rounded-2xl object-center object-cover h-full w-full" src="http://api.totsworld.co.in/static/img/categories/category2.jpeg" alt="watch-image" />
                    <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                      Kids Clothing
                    </button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-rows md:gap-x-8">

              <div className="relative group justify-center items-center md:gap-x-4">
                <img className="rounded-2xl object-center object-cover h-full w-full" src="http://api.totsworld.co.in/static/img/categories/category4.jpeg" alt="girl-image" />
                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Accessories
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>

              <div className="relative group justify-center items-center md:gap-x-4 md:gap-x-8">
                <img className="rounded-2xl object-center object-cover h-full w-full" src="http://api.totsworld.co.in/static/img/categories/category4.jpeg" alt="girl-image" />
                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Accessories
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>

              <div className="relative group justify-center items-center md:gap-x-4 md:gap-x-8">
                <img className="rounded-2xl object-center object-cover h-full w-full" src="http://api.totsworld.co.in/static/img/categories/category4.jpeg" alt="girl-image" />
                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Accessories
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
              </div>

            </div>
          </div>
        </div>

        {CatalogueData.map((catalogue) => (
          <div key={catalogue.id}>
            <h4>{catalogue.title}</h4>
            <p>{catalogue.description}</p>
            <div>
              {catalogue.images.map((image) => (
                <p key={image.id}>{image.image}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return <p>Error loading data: {error.message}</p>;
  }
};

export default Catalogue;