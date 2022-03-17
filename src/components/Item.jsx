import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

import { addToCart } from "../actions/cartActions";


export default function Item({ product }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const {user} = useSelector(state => state.auth);

  const handleAddtoCart = ()=> {
   if(!user) {
    history.push('/login')
   }else{
    dispatch(addToCart({ ...product, quantity: 1 }))
   }
  }

  return (
    <div className="product">
      <h4>{product.title}</h4>
      <p>{product.price}</p>
      <button onClick={handleAddtoCart}>
        {" "}
        Add To Cart
      </button>
    </div>
  );
}
