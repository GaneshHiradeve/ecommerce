import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCartItem, GetAllProduct, ProductbyCategory } from "../redux/action/note";

import "./purchase.css";

const Purchase = () => {
  const { allproduct, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [category,setCategory]=useState("Shoes")
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(GetAllProduct());
    }
  }, [dispatch, isAuthenticated]);

  const GetProductByCategory=(e)=>{
        e.preventDefault();
        dispatch(ProductbyCategory(category))  
  }

  const AddtoCart=(id)=>{

       
     dispatch(AddCartItem(id))
  }
  return (
    <main id="main" class="main">
      <div class="container d-flex flex-column justify-content-center  mt-50 mb-50">
      <div class="Search-category container">

  <form class="d-flex flex-wrap align-items-center" onSubmit={GetProductByCategory}>
    <div class="form-group flex-grow-1 mr-2">
      <label for="categorySelector">Category</label>
      <select class="form-control form-control-lg" id="categorySelector"
      value={category}
      onChange={e => setCategory(e.target.value)}
      >
         <option value="shoes">Shoes</option>
    <option value="watch">Watch</option>
    <option value="Geans">Geans</option>
    <option value="T-shirt">T-shirt</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Search</button>
  </form>
</div>


        <div class="row">
          {allproduct &&
            allproduct.map((item, index) => {
              
              return (
                
                <>
                  <div class="col-md-3 mt-4" key={index}>
                    <div class="card">
                      <div class="card-body">
                        <div class="card-img-actions">
                          <img
                            src={item.product_img}
                            class="card-img img-fluid"
                            width="96"
                            height="350"
                            alt=""
                          />
                        </div>
                      </div>

                      <div class="card-body bg-light text-center">
                        <div class="mb-2">
                         

                          <a href="#/" class="text-muted" data-abc="true" >
                            {item.product_name}
                          </a>
                        </div>

                        <h3 class="mb-0 font-weight-semibold">{item.price}</h3>

                       

                        <button type="button" class="btn bg-cart" onClick={() => AddtoCart(item._id)}>
                          <i class="fa fa-cart-plus mr-2"></i> Add to cart
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

export default Purchase;

