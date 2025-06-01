import { useState, useEffect } from "react";
import axios from "axios";

export const useProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const useProduct = () => {
 useEffect(() => {
  fetch('http://localhost:8000/products')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProducts(data);
    })
    .catch(err => {
      console.error("Error fetching products:", err);
    });
}, []);
};

  return { data, loading, error };
};
