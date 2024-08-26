export default function ProductCard() {
    return (
        <li>
    <a href="#" className="group block overflow-hidden">
      <img
        src="http://api.totsworld.co.in/static/img/categories/category1.jpeg"
        alt=""
        className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
      />

      <div className="relative bg-white pt-3">
        <h3
          className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
        >
          produt title
        </h3>

        <p className="mt-2">
          <span className="sr-only"> Regular Price </span>

          <span className="tracking-wider text-gray-900"> ₹100 </span>
        </p>
      </div>
    </a>
  </li>
    );
}