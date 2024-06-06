import Link from "next/link";
import { useContext, useRef } from "react";
import { CartContext } from "../../lib/CartContext";
import toast from "react-hot-toast";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Utility function to format price with a comma for thousands
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Composant pour le bouton de déplacement droit
const CustomNextArrow = ({ onClick }) => (
  <div onClick={onClick} className="arrow next">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  </div>
);

// Composant pour le bouton de déplacement gauche
const CustomPrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="arrow prev">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  </div>
);

export default function Products({ products }) {
  const { addProduct } = useContext(CartContext);

  // Référence pour contrôler le carrousel
  const sliderRef = useRef();

  // Configuration du carrousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  // Fonction pour déplacer le carrousel vers la droite
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  // Fonction pour déplacer le carrousel vers la gauche
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-6">
        <h4 className="text-2xl font-bold tracking-tight text-text text-center" style={{ color: "#f97316" }}>
        Cela peut vous intéresser
        </h4>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {products?.length > 0 &&
              products.map((product) => (
                <div key={product.id}>
                  <div className="group relative">
                    <div className="group block overflow-hidden border border-accent rounded-xl border-opacity-10">
                      <div className="p-1">
                        <div className="relative h-[300px] sm:h-[300px]">
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
                          <h3>{product.title}</h3>

                          <div className="mt-1.5 flex items-center justify-between text-text">
                            <p className="tracking-wide text-black">
                              DT. {formatPrice(product.price)}
                            </p>

                            <button
                              onClick={() => {
                                addProduct(product._id);
                                toast.success("Item added to cart!!");
                              }}
                              type="button"
                              className="flex items-center divide-x rounded-lg border bg-white text-center text-md font-medium text-secondary-700 shadow-sm hover:bg-gray-100"
                            >
                              <div className="flex items-center space-x-2 py-2.5 px-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                  />
                                </svg>

                                <span>Ajouter</span>
                              </div>
                              {/* <div class="py-2.5 px-3">18</div> */}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>

          {/* Boutons de déplacement */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-6 mt-4">
            <button onClick={prevSlide} className="arrow-btn prev-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button onClick={nextSlide} className="arrow-btn next-btn">
              <svg
                xmlns="http://www.w3.org/200
                /svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
