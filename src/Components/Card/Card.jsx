import { Link } from "react-router-dom";

const Card = ({ items }) => {
  // Verifica si resultado está definido y no es null
  if (!items) return null;

  // Divide la cadena de título en palabras
  const titleWords = items.title.split(" ");

  // Toma las tres primeras palabras
  const firstThreeWords = titleWords.slice(0, 2).join(" ");

  return (
    <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
      <div className="p-2 shadow border rounded-md">
        {items && (
          <div>
            <div className="block relative h-48 rounded overflow-hidden">
              <Link
                to={`/detail/${items.id}`}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={items.image}
                ></img>
              </Link>
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {items.category}
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {firstThreeWords}
              </h2>
              <div className="flex justify-between items-center">
                <p className="mt-1">${items.price}</p>
                <button className="text-black bg-[#56B5A2] p-2 rounded-lg">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
