import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

// Dummy product data
const products = [
  { id: 1, name: 'Product 1', price: '$100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s', rating: 4 },
  { id: 2, name: 'Product 2', price: '$150', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D', rating: 5 },
  { id: 3, name: 'Product 3', price: '$200', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D', rating: 3 },
  { id: 4, name: 'Product 4', price: '$250', image: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg', rating: 4.5 },
];

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen  ">
       
      <div className="relative bg-blue-200 text-white py-20 px-4  md:px-20">
        <div className="absolute inset-0">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-J4IuRsy1NA42Iu-p4k4O_hh4H-gbCYbBg&s" 
            alt="Hero Banner" 
            className="w-full h-full object-cover opacity-60 " 
          />
        </div>
        <div className="relative z-10 text-center mt-96">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Shop</h1>
          <p className="text-lg md:text-2xl mb-8">Discover amazing products at unbeatable prices.</p>
          <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-400">
            Shop Now
          </button>
        </div>
      </div>

      
      <div className="py-10 px-4 md:px-20">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-2">{product.price}</p>
              <div className="flex items-center text-yellow-500">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar key={index} className={index < product.rating ? 'text-yellow-500' : 'text-gray-300'} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

   
      <div className="border-t-2 border-black py-10 px-4 md:px-20 text-center mt-">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Limited Time Offer!</h2>
        <p className="text-lg md:text-2xl mb-4">Get 20% off on all products. Use code: SALE20</p>
        <button className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-400">
          Shop Now
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4 md:px-20">
        <div className="flex justify-between items-center">
          <div>&copy; 2024 Your Shop</div>
          <div>
            <a href="#" className="hover:underline mx-2">Privacy Policy</a>
            <a href="#" className="hover:underline mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
