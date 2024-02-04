import React, { useEffect } from 'react'
import './Allorder.css'
import { useDispatch, useSelector } from 'react-redux'
import { AllOrders } from '../redux/action/note'
const Allorders = () => {

const dispatch=useDispatch()
   const { order_product }=useSelector((state) => state.user);

 

    
  return (

    <main id="main" className="main">



<section class="placed-orders">

   <h1 class="title">placed orders</h1>

   <div class="box-container">

    {
        order_product && order_product.map((item,index)=>{
            return(
                <>
                <div className="box">
    <p> Customer Name : <span>{item.customerName}</span> </p>
    <p> Product name : <span>{item.product_name}</span> </p>
    <p> number : <span>{item.mobileNumber}</span> </p>
    <p> address : <span>{item.address}</span> </p>
    <p> payment method : <span>{item.payment}</span> </p>
    <p> your orders : <span>Ganesh</span> </p>
    <p> total price : <span>₹{item.price}/-</span> </p>
    <p> payment status : 
      pending
    </p>
  </div>
                </>
            )
        })
    }
    
  </div>

</section>  </main>
  )
}

export default Allorders
