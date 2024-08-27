import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'

const Item = (props) => {
  const cart=useContext(CartContext);
  console.log("Cart",cart);
  return (
    <div>
      <h4>{props.name}</h4>
      <h5>Price:{props.price}</h5>
      <button onClick={()=>{cart.setItems([...cart.items,{
        name :props.name,
        price :props.price
      }])}}>Add To Cart</button>
    </div>
  )
}

export default Item
