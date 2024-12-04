import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProdContext = createContext();

export default ProdContext;

// The ProdProvider

export const ProdProvider = ({ children }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  let prodData = {
    products: products,
  };

  return (
    <ProdContext.Provider value={prodData}>{children}</ProdContext.Provider>
  );
};
