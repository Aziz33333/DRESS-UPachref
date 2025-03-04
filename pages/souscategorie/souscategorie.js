import { useContext } from "react";
import { CartContext } from "@/lib/CartContext";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Link from "next/link";
import toast from "react-hot-toast";

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function SousCategoriePage({ sousCategorieProducts, sousCategorie }) {
  const { addProduct } = useContext(CartContext);

  return (
    <div className="mt-14 md:mt-6 w-full px-4 md:p-0">
      <h1 className="text-3xl font-semibold mb-4">{sousCategorie}</h1>
      <div className="grid grid-cols-2 gap-x-3 md:gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 xl:gap-x-8 px-2">
        {sousCategorieProducts.map((product) => (
          <div key={product._id}>
            <div className="group block overflow-hidden border border-black rounded-xl border-opacity-10">
              <div className="">
                <div className="relative md:h-[300px] h-[200px]">
                  <Link href={"/products/" + product._id}>
                    <img
                      src={product.images[0]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-contain opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src={product.images[1]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-contain opacity-0 group-hover:opacity-100"
                    />
                  </Link>
                </div>

                <div className="relative p-3 border-t">
                  <h3 className="text-md text-gray-700 ">
                    {product.title}
                  </h3>

                  <div className="mt-1.5 flex items-center justify-between text-text">
                    <p className="tracking-wide text-black">DT. {formatPrice(product.price)}</p>

                    <button
                      onClick={() => { 
                        addProduct(product._id); 
                        toast.success('Item added to cart!');
                      }} 
                      type="button" 
                      className="flex items-center divide-x rounded-lg border bg-white text-center text-md font-medium text-secondary-700 shadow-sm hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-2 py-2.5 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span>Add</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { souscategorie } = params;
  await mongooseConnect();
  const sousCategorieProducts = await Product.find({ category: souscategorie }).populate('category');

  return {
    props: {
      sousCategorieProducts: JSON.parse(JSON.stringify(sousCategorieProducts)),
      sousCategorie,
    },
  };
}
