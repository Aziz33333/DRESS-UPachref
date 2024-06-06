import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../lib/CartContext";

export default function Hero({ product }) {
  const { addProduct } = useContext(CartContext);

  function addItemToCart() {
    addProduct(product._id);
  }

  if (product) {
    return (
      <div
        className="relative overflow-hidden my-14 md:my-10"
        style={{ backgroundColor: '#fffbeb' }}
      >
        <div className="lg:py-40 min-h-[750px]">
          <div className="relative mx-auto sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-xl text-start">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl lg:hidden max-md:mb-6 font-bold tracking-tight text-primary">
                <span className="text-accent"></span>
              </h1>
              <p className="text-xl font-bold text-gray-900 sm:text-3xl">
  Découvrez nos sélections exclusives
</p>

              <div className="mt-10 flex flex-col max-sm:items-center max-sm:justify-center">
                {/* Decorative image grid */}

                <div className="flex gap-4 items-center max-sm:justify-center max-sm:mt-6">
                  <Link
                    href="/Recommendation"
                    className="mt-6 inline-block rounded-md border border-transparent bg-black px-6 py-3 text-center font-medium text-white hover:text-gray-500"
                  >
                    Recommandation
                  </Link>
                  <Link
                    href="/products"
                    className="mt-6 inline-block rounded-md bg-transparent border border-accent px-6 py-3 text-center font-medium text-accent hover:text-black-700 hover:border-gray-500 hover:bg-gray-400"
                  >
                    Voir tout 
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <Link href="/Homme">
                      <div className="w-72 h-80 overflow-hidden rounded-lg border border-black transform -rotate-4 translate-x-2 hover:rotate-8 hover:translate-x-3 transition-transform duration-300 ease-in-out relative bg-gray-200">
                        <img src="https://i.pinimg.com/564x/96/d8/4d/96d84d41d83d2762eb1094a4b0822692.jpg" alt="Homme" className="h-full w-full object-cover object-center" />
                        <span className="absolute inset-0 flex items-center justify-center font-bold text-white bg-black bg-opacity-75 transition-opacity duration-300 opacity-0 hover:opacity-100">Homme</span>
                      </div>
                    </Link>
                    <Link href="/Femme">
                      <div className="w-72 h-80 overflow-hidden rounded-lg border border-black transform -rotate-4 translate-x-2 hover:rotate-8 hover:translate-x-3 transition-transform duration-300 ease-in-out relative bg-gray-200">
                        <img src="https://i.pinimg.com/564x/9e/26/db/9e26db262ec3715ca8ae5bc9c7bb3567.jpg" alt="Femme" className="h-full w-full object-cover object-center" />
                        <span className="absolute inset-0 flex items-center justify-center font-bold text-white bg-black bg-opacity-75 transition-opacity duration-300 opacity-0 hover:opacity-100">Femme</span>
                      </div>
                    </Link>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <Link href="/Fille">
                      <div className="w-72 h-80 overflow-hidden rounded-lg border border-black transform -rotate-4 translate-x-2 hover:rotate-8 hover:translate-x-3 transition-transform duration-300 ease-in-out relative bg-gray-200">
                        <img src="https://scontent.ftun20-1.fna.fbcdn.net/v/t39.30808-6/347251371_646918967471215_4709051133496378468_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Q8uYoWDoBBQQ7kNvgGkBiPt&_nc_ht=scontent.ftun20-1.fna&oh=00_AYDXswvAVC2ug2yNuJ-ta8WRgaVSHxsYUDPeRn5w4wYSUg&oe=6664D91F" alt="Fille" className="h-full w-full object-cover object-center" />
                        <span className="absolute inset-0 flex items-center justify-center font-bold text-white bg-black bg-opacity-75 transition-opacity duration-300 opacity-0 hover:opacity-100">Fille</span>
                      </div>
                    </Link>
                    <Link href="/Garcon">
                      <div className="w-72 h-80 overflow-hidden rounded-lg border border-black transform -rotate-4 translate-x-2 hover:rotate-8 hover:translate-x-3 transition-transform duration-300 ease-in-out relative bg-gray-200">
                        <img src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/438144720_824657049697405_7352460418189442394_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QYWT7rAd1csQ7kNvgFUZ3kB&_nc_ht=scontent.ftun8-1.fna&oh=00_AYBx3EqFk-4-SCl82uFa6AtjnqT1DnFp0YVmLd7PegrGtw&oe=6663A45D" alt="Garçon" className="h-full w-full object-cover object-center" />
                        <span className="absolute inset-0 flex items-center justify-center font-bold text-white bg-black bg-opacity-75 transition-opacity duration-300 opacity-0 hover:opacity-100">Garçon</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
