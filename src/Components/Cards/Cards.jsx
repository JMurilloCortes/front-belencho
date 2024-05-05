import React, { useEffect } from "react";
import { useStateProducts } from "../../States/useStateProducts/useStateProducts"
import axios from "axios";
import Card from "../Card/Card";

const apiUrl = "http://localhost:3000/productos";

const Cards = () => {
  const{resultado, setResultado} = useStateProducts();

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setResultado(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="text-gray-600 body-font mt-14">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {resultado.map((item, index) => (
            <Card key={index} items={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;

