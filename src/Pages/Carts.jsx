import React, { useContext, useMemo } from "react";
import { CartContext } from "../App";

export default function Carts() {
  const { cartProduct } = useContext(CartContext);
  const servicecost = 3

  const totalValue = useMemo(() => {
    let temp = 0;
    if (cartProduct.length) {
      for (var i = 0; i < cartProduct.length; i++) { 
        temp += cartProduct[i].price
      }
    }
    return temp;
  }, []);

  if (cartProduct.length === 0) {
    return (
      <div className="container text-center py-4">
        <h1 className="display-6">Empty cart!</h1>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h1>{totalValue}</h1>
      {/* row */}
      <div className="row">
        <div className="col-lg-8 col-md-7">
          <div>
            {/* alert */}

            <ul className="list-group ">
              {cartProduct.map((product) => (
                <li
                  key={Math.random()}
                  className="list-group-item py-3 py-lg-0 px-0 border-top"
                >
                  {/* row */}
                  <div className="row align-items-center">
                    <div className="col-3 col-md-2">
                      {/* img */}
                      <img
                        src={product.image.thumbnail}
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-4 col-md-5">
                      {/* title */}
                      <a href="shop-single.html" className="text-inherit">
                        <h6 className="mb-0">{product.name}</h6>
                      </a>
                      <span>
                        <small className="text-muted">{product.sku}</small>
                      </span>
                    </div>
                    {/* price */}
                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                      <span className="fw-bold">${product.price}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* btn */}
            <div className="d-flex justify-content-between mt-4">
              <a href="#!" className="btn btn-success">
                Continue Shopping
              </a>
            </div>
          </div>
        </div>

        {/* sidebar */}
        <div className="col-12 col-lg-4 col-md-5">
          {/* card */}
          <div className="mb-5 card mt-6">
            <div className="card-body p-6">
              {/* heading */}
              <h2 className="h5 mb-4">Summary</h2>
              <div className="card mb-2">
                {/* list group */}
                <ul className="list-group list-group-flush">
                  {/* list group item */}
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div>Item Subtotal</div>
                    </div>
                    <span>${totalValue}</span>
                  </li>

                  {/* list group item */}
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div>Service Fee</div>
                    </div>
                    <span>${servicecost}</span>
                  </li>
                  {/* list group item */}
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div className="fw-bold">Subtotal</div>
                    </div>
                    <span className="fw-bold">${totalValue + servicecost}</span>
                  </li>
                </ul>
              </div>
              <div className="d-grid mb-1 mt-4">
                {/* btn */}
                <button
                  className="btn btn-success btn-lg d-flex justify-content-between align-items-center"
                  type="submit"
                >
                  Go to Checkout <span className="fw-bold">${totalValue + servicecost}</span>
                </button>
              </div>
              {/* text */}
              <p>
                <small>
                  By placing your order, you agree to be bound by the Freshcart
                  <a href="#!">Terms of Service</a>
                  and <a href="#!">Privacy Policy.</a>
                </small>
              </p>

              {/* heading */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
