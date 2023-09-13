import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Placeholder } from "react-bootstrap";
import { API_PRODUCT_URL } from "../utils";
import axios from "axios";
import CartButton from "../Components/CartButton";

export default function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  //Fetch the product in slug only. dynamically. we get 1 product only out of many which we load in a template (this page).
  useEffect(() => {
    axios
      .get(`${API_PRODUCT_URL}/${slug}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        alert("Unkown Product URL");
      });
  }, [slug]);

  if (product === null) {
    return (
      <section>
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <Placeholder xs={4} />
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder
                  xs={6}
                  style={{ height: "40px" }}
                  className="my-3"
                />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />
                <Placeholder xs={4} /> <Placeholder xs={6} />
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="dark" xs={4} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      <section>
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={product.image.original}
                alt={product.slug}
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-{product.sku}</div>
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">
                  ${product.price}
                </span>
                <span>${product.sale_price}</span>
              </div>
              <p className="lead">{product.description}</p>
              <div className="d-flex">
                <CartButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
