import React from "react";
import { FaShoppingCart, FaHeart, FaStar} from "react-icons/fa";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";


const ProductCard = ({product,isInCard}) => {

let {setAddCart,incrementQuantity,decrementQuantity}=useContext(MyStore);

const addToCart = () => {
  setAddCart((prev) => [...prev, {...product, quantity: 1}]);
  alert("Product Added Successfully");
};

  return (
    <div className="w-80  bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      {/* Image Section */}
      <div className="relative bg-gray-100 h-72 flex items-center justify-center">

        <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md hover:bg-rose-500 hover:text-white transition">
          <FaHeart />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="h-56 object-contain hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">

        {/* Category */}
        <span className="bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-1 rounded-full w-fit">
          {product.category}
        </span>




        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-3">
          {product.description}
        </p>

        {/* Rating & Price */}
        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold text-sm">
              {product.rating.rate}
            </span>

            <span className="text-xs text-gray-500">
              ({product.rating.count})
            </span>
          </div>

          <h2 className="text-2xl font-bold text-rose-500">
            ${product.price}
          </h2>
        </div>

        {/* Button */}
       
       {
        isInCard ? <button className="mt-3 bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-xl flex justify-center items-center gap-2 font-semibold transition"><span onClick={() => decrementQuantity(product.id)} className="text-2xl">{isInCard.quantity > 1 && "-"}</span><span className="text-2xl">{isInCard.quantity}</span><span onClick={() => incrementQuantity(product.id)} className="text-2xl">+</span></button> : <button onClick={addToCart} className="mt-3 bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 font-semibold transition">

          <FaShoppingCart />

          Add To Cart
        </button>
       }

      </div>
    </div>
  );
};

export default ProductCard;