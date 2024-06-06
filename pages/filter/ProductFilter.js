import React, { useState, useEffect, useContext } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { CartContext } from '@/lib/CartContext';
import toast from 'react-hot-toast';

const ProductFilter = ({ allProducts, setFilteredProducts }) => {
  const { addProduct } = useContext(CartContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  useEffect(() => {
    // Apply filters to products
    let products = allProducts;

    if (selectedCategories.length > 0) {
      products = products.filter(product => selectedCategories.includes(product.title));
    }

    if (selectedBrand) {
      products = products.filter(product => product.brand === selectedBrand);
    }

    if (selectedSizes.length > 0) {
      products = products.filter(product => selectedSizes.includes(product.sizes));
    }

    if (selectedColors.length > 0) {
      products = products.filter(product => selectedColors.includes(product.colors));
    }

    products = products.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

    setFilteredProducts(products);
  }, [selectedCategories, priceRange, selectedBrand, selectedSizes, selectedColors]);

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
    setSelectedBrand('');
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <div>
   <button
  className="flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
  onClick={toggleOffcanvas}
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM3 9a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1zm-1 4a1 1 0 011-1h6a1 1 0 110 2H3a1 1 0 01-1-1zm-1 4a1 1 0 011-1h4a1 1 0 110 2H3a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
  Filter
</button>

      {isOffcanvasOpen && (
        <div className={`fixed inset-0 flex z-50 transition-all duration-500 ${isOffcanvasOpen ? "opacity-100" : "opacity-0"}`}>
          <div className="fixed inset-0 bg-black opacity-0" onClick={toggleOffcanvas}></div>
          <div className="relative right-0 w-[270px] bg-white p-4 shadow-lg overflow-y-hidden">
            <button
              className="absolute top-0 right-0 m-4 text-black"
              onClick={toggleOffcanvas}
            >
              X
            </button>
            <div className="w-full p-4">
              <h2 className="text-lg font-bold mb-4">Filter</h2>
              <div>
                <h3 className="font-semibold">Category</h3>
                {["Short", "Pull", "Shoes", "Robe", "Jeans"].map(category => (
                  <div key={category} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => setSelectedCategories(prev => {
                        if (prev.includes(category)) {
                          return prev.filter(c => c !== category);
                        } else {
                          return [...prev, category];
                        }
                      })}
                      className="mr-2"
                    />
                    <label htmlFor={category}>{category}</label>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h3 className="font-semibold">Price</h3>
                <Slider
                  range
                  min={0}
                  max={1000}
                  value={priceRange}
                  onChange={setPriceRange}
                />
                <p>{`DT. ${priceRange[0]} - DT. ${priceRange[1]}`}</p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold">Brand</h3>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="Dress_Up"
                    name="brand"
                    checked={selectedBrand === "Dress_Up"}
                    onChange={() => setSelectedBrand("Dress_Up")}
                    className="mr-2"
                  />
                  <label htmlFor="Dress_Up">Dress_Up</label>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold">Size</h3>
                {["S", "M", "L", "XL"].map(size => (
                  <div key={size} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={size}
                      checked={selectedSizes.includes(size)}
                      onChange={() => setSelectedSizes(prev => {
                        if (prev.includes(size)) {
                          return prev.filter(s => s !== size);
                        } else {
                          return [...prev, size];
                        }
                      })}
                      className="mr-2"
                    />
                    <label htmlFor={size}>{size}</label>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h3 className="font-semibold">Color</h3>
                <div className="flex space-x-2">
                  {[
                    { name: "Noir", color: "#000000" },
                    { name: "Blanc", color: "#FFFFFF" },
                    { name: "Rose", color: "#FFC0CB" },
                    { name: "Maron", color: "#8B4513" },
                    { name: "Blue", color: "#0000FF" }
                  ].map(({ name, color }) => (
                    <button
                      key={name}
                      style={{ backgroundColor: color }}
                      className={`w-8 h-8 rounded-full border-4 ${selectedColors.includes(name) ? 'border-black' : 'border-transparent'}`}
                      onClick={() => setSelectedColors(prev => {
                        if (prev.includes(name)) {
                          return prev.filter(c => c !== name);
                        } else {
                          return [...prev, name];
                        }
                      })}
                    />
                  ))}
                </div>
              </div>

              <button
                className="mt-4 p-2 bg-red-500 text-white rounded"
                onClick={handleResetFilters}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
