import { useContext } from "react";
import { CartContext } from "@/lib/CartContext";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import toast from "react-hot-toast";
import Link from "next/link";

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

async function getSimilarProducts(category, productId) {
  try {
    await mongooseConnect();
    const product = await Product.findById(productId);
    const similarProducts = await Product.find({
      category: product.category,
      _id: { $ne: productId }
    }).limit(5);
    return similarProducts;
  } catch (error) {
    console.error("Error fetching similar products:", error);
    return [];
  }
}

export default function ProductPage({ product, similarProducts }) {
  const { addProduct } = useContext(CartContext);
  
  if (product) {
    return (
      <section className="mt-20 md:mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image section */}
          <div className="lg:aspect-h-2 lg:aspect-w-2 lg:rounded-lg overflow-hidden px-4 md:px-2">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full md:h-[90vh] object-cover object-center border border-black rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid lg:grid-cols-1 lg:gap-y-4 px-2 gap-2 md:gap-0 md:px-2">
            {product.images.slice(1, 3).map((image, index) => (
              <div key={index} className="lg:aspect-h-2 lg:aspect-w-3 lg:overflow-hidden lg:rounded-lg ">
                <img
                  src={image}
                  alt={product.title}
                  className="w-full h-full md:h-[44vh] object-cover object-center border rounded-lgborder-black p-4"
                />
              </div>
            ))}
          </div>

          {/* Product info */}
          <div className="p-4 lg:p-8 border">
            <h1 className="text-3xl font-semibold text-gray-900">{product.title}</h1>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Description</h2>
              <p className="mt-2 text-gray-700">{product.description}</p>
            </div>

            {/* Add other product details here */}
            <div className="mt-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Price</h2>
              <p className="mt-2 text-black font-semibold text-lg">
                DT {formatPrice(product.price)}
              </p>
            </div>
            <div className="w-full">
              <button
                className="bg-black text-white py-2 px-4 mt-4 rounded-md hover:bg-gray-700 w-full"
                onClick={() => {
                  addProduct(product._id);
                  toast.success('Item added to cart!!');
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Similar Products</h2>
          <div className="grid grid-cols-2 gap-x-3 md:gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 xl:gap-x-8 px-2"> {/* Change grid layout here */}
            {similarProducts.map((similarProduct) => (
              <div key={similarProduct._id} className="border border-accent rounded-xl border-opacity-10 overflow-hidden group">
                <div className="relative md:h-[300px] h-[200px]">
                <Link href={"/products/" + similarProduct._id}>
                  <img
                    src={similarProduct.images[0]}
                    alt={similarProduct.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />
                  {similarProduct.images[1] && (
                    <img
                      src={similarProduct.images[1]}
                      alt={similarProduct.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                  )}
                </Link>
              </div>

                <div className="p-3 border-t">
                  <h3 className="text-md text-gray-700">{similarProduct.title}</h3>

                  <div className="mt-1.5 flex items-center justify-between text-text">
                    <p className="tracking-wide text-black">DT. {formatPrice(similarProduct.price)}</p>

                    <button
                      onClick={() => {
                        addProduct(similarProduct._id);
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
            ))}
          </div>
        </div>
      </section>
    );
  }

  return <p>Product not found.</p>;
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  const similarProducts = await getSimilarProducts(product.category, id);

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      similarProducts: JSON.parse(JSON.stringify(similarProducts)),
    },
  };
}
