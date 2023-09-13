import axios from "axios";
import React, { useEffect, useState } from "react";
import API_URL from "../utils";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";

export default function Home() {
  const [products, setProduct] = useState("LOADING");

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setProduct(response.data.data);
    });
  }, []);

  return (
    <>
      <Banner />
      <div className="container py-4">
        {products === "LOADING" ? (
          <b>Loading .....</b>
        ) : (
          <div className="row">
            {products.map((item) => (
              <div className="col-md-3" key={Math.random()}>
                <ProductCard data={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
