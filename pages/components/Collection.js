import Link from "next/link";

// Utilisation de la fonction formatPrice pour formater le prix avec une virgule pour les milliers
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function Collection({ product }) {
  if (product) {
    return (
      <>
        <section>
          <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <header className="text-center">
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Nouvelle Collection

              </h2>

              <p className="max-w-lg mx-auto mt-4 text-gray-500">
              Découvrez nos dernières nouveautés et élevez votre style avec notre collection exclusive.
              </p>
            </header>

            <div>
              <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                  <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8" style={{ backgroundColor: '#fffbeb' }}>
                    <div className="max-w-md mx-auto text-center lg:text-left   "  style={{ backgroundColor: '#fffbeb' }}>
                      <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Découvrez tous nos produits disponibles sur Dress-Up et trouvez votre style idéal !</h2>

                        <p className="mt-4 text-gray-500">
                          {product.description}
                        </p>
                        <p className="mt-1 text-lg text-black"></p>
                      </header>

                      <Link href="/products" className="mt-6 inline-block rounded-md bg-black text-white border border-accent px-6 py-3 text-center font-medium hover:bg-gray-400">
                      Voir tout
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-2 lg:py-8">
                    <ul className="grid grid-cols-2 gap-4">
                      <li>
                        <div className="block group">
                          <img
                            src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/438888979_826645362831907_6712284160060056115_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pD9XyxvuREkQ7kNvgGMtPw9&_nc_ht=scontent.ftun8-1.fna&oh=00_AYA6v9Usqhl3OpzZMMcj1EaxM0la9I2VC2xyqmn-gGiOzA&oe=6663B456" // Utilisation de l'URL pour l'image
                            alt=""
                            className="object-cover w-full rounded aspect-square"
                          />
                        </div>
                      </li>

                      <li>
                        <div className="block group">
                          <img
                            src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/420223581_808650667964710_6430279295235478409_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AN39BSmUw2UQ7kNvgGUpnW0&_nc_ht=scontent.ftun8-1.fna&oh=00_AYBFN2MG5ULwHp-AdeBcuPvhnAPCZvPJjFd00Bf6iL7i9Q&oe=666397EA" // Utilisation de l'URL pour l'image
                            alt=""
                            className="object-cover w-full rounded aspect-square"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  return null;
}
