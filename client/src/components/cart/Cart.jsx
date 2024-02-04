import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, DeleteCartItem } from "../redux/action/note";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart_product, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(CartItem());
    }
  }, [dispatch, isAuthenticated]);

  const RemoveCartIteam = async(product_id) => {
    dispatch(DeleteCartItem(product_id));
    
  };
  return (
    <main id="main" className="main">
      <div className="container d-flex justify-content-center mt-50 mb-50">
        <div className="row">
          {cart_product &&
            cart_product.map((item, index) => {
              return (
                <>
                  <div className="col-md-3 mt-4" key={index}>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-img-actions">
                          <img
                            src={item.product_img}
                            className="card-img img-fluid"
                            width="96"
                            height="350"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="card-body bg-light text-center">
                        <div className="mb-2">
                          <h6 className="font-weight-semibold mb-2">
                            <a
                              href="#/"
                              className="text-default mb-2"
                              data-abc="true"
                            >
                              {item.product_name}
                            </a>
                          </h6>

                        </div>

                        <h3 className="mb-0 font-weight-semibold">$250.99</h3>

                      


                        <Link
                          to={`/order_product/${item.price}/${item.product_id}`}
                        >
                          <button type="button" className="btn bg-cart">
                            <i className="fa fa-cart-plus mr-2"></i> Place Order
                          </button>
                        </Link>

                        <br />
                        <br />
                        <button
                          type="button"
                          className="btn bg-cart"
                          onClick={() => RemoveCartIteam(item.product_id)}
                        >
                          <i className="fa fa-cart-plus mr-2"></i> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default Cart;
