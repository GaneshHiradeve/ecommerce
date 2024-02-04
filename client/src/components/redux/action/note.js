import { server } from "../reducer/userReducer";

import axios from "axios";

export const CreateProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "userproductRequest" });

    const { data } = await axios.post(`${server}/add_product`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    dispatch({ type: "userproductSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "userproductFail", payload: err.response.data.message });
  }
};

export const GetAllProduct = () => async (dispatch) => {
  try {
    dispatch({ type: "allproductRequest" });

    const { data } = await axios.get(`${server}/allproduct`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({ type: "allproductSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "allproductFail", payload: err.response.data.message });
  }
};

export const ProductbyCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: "byCategoryRequest" });

    const { data } = await axios.get(`${server}/category/${category}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({ type: "byCategorySuccess", payload: data });
  } catch (err) {
    dispatch({ type: "byCategoryFail", payload: err.response.data.message });
  }
};

export const AddCartItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: "AddcartRequest" });


    const { data } = await axios.post(
      `${server}/addtocart`,
      { id },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "AddcartSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "AddcartFail", payload: err.response.data.message });
  }
};

export const CartItem = () => async (dispatch) => {
  try {
    dispatch({ type: "CartRequest" });

    const { data } = await axios.get(`${server}/cartproduct`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({ type: "CartSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "CartFail", payload: err.response.data.message });
  }
};

export const DeleteCartItem = (product_id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteCartRequest" });

    const { data } = await axios.delete(
      `${server}/deleteproduct/${product_id}
    `,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "DeleteCartSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "DeleteCartFail", payload: err.response.data.message });
  }
};

export const PlaceOrder = ( product_id,customerName, mobileNumber,address,payment,city,state, country, pincode) =>
  async (dispatch) => {
    try {
      dispatch({ type: "PlaceOrderRequest" });

      const { data } = await axios.post(
        `${server}/placeorder`,{
          product_id,
          customerName,
          mobileNumber,
          address,
          payment,
          city,
          state,
          country,
          pincode
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({ type: "PlaceOrderSuccess", payload: data });
    } catch (err) {
      dispatch({ type: "PlaceOrderFail", payload: err.response.data.message });
    }
  };


  export const AllOrders = () => async (dispatch) => {
    try {
      dispatch({ type: "AllOrdersRequest" });
  
 
 
      const { data } = await axios.get(`${server}/allorders`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      dispatch({ type: "AllOrdersSuccess", payload: data });
    } catch (err) {
      dispatch({ type: "AllOrdersFail", payload: err.response.data.message });
    }
  }; 

