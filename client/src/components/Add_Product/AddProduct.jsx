import React, { useState } from 'react'
import './AddProduct.css'
import { useDispatch } from 'react-redux';
import { CreateProduct } from '../redux/action/note';
const AddProduct = () => {

    const [product_name,setProductName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("Shoes");
    const [file,setFile]=useState("");
    const dispatch=useDispatch();


    const changeImageHandler = e => {
        const temp_file = e.target.files[0];
       
        const reader = new FileReader();
        reader.readAsDataURL(temp_file);
        reader.onloadend = () => {
          setFile(temp_file);
        };
      };


    const AddProductHandler=(e)=>{
          e.preventDefault();
          const formData = new FormData();
          formData.append('product_name',product_name)
          formData.append('price',price)
          formData.append('category',category)
          formData.append('file',file)
          dispatch(CreateProduct(formData));
    }
  return (
    <main id="main" className="main">
    <form className='Product' onSubmit={AddProductHandler}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Product Name</label>
    <input class="form-control form-control-lg" type="text" placeholder="Watch"
     value={product_name}
      onChange={e => setProductName(e.target.value)}
      required
    />
    
  </div>
  

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Price</label>
    <input class="form-control form-control-lg" type="text" placeholder="400" required  value={price}
      onChange={e => setPrice(e.target.value)}/>
  </div>
  <div className="form-group">
  <label htmlFor="exampleInputPassword1">Category</label>
  <select className="form-control form-control-lg" id="categorySelector"
    value={category}
    onChange={e => setCategory(e.target.value)} 
    required
  >
    <option value="shoes">Shoes</option>
    <option value="watch">Watch</option>
    <option value="Geans">Geans</option>
    <option value="T-shirt">T-shirt</option>
  </select>
</div>

  <div class="form-group">
    <label for="exampleFormControlFile1">Product Image</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" required  onChange={changeImageHandler}/>
  </div>
  <button type="submit" className="btn btn-primary">Create</button>
</form>
</main>

  )
}

export default AddProduct
