import React, { useContext, useState } from 'react'
import Cart from './Cart'
import Item from './Item'
const App = () => {

  return (
    <div>
      <Item name="Macbook Pro" price={90000}></Item>
      <Item name="Apple Iphone" price={80000}></Item>
      <Item name="Scientific calculator" price={95000}></Item>
      <Item name="Hp omen laptop" price={100000}></Item>
      <Cart></Cart>
    </div>
  ) 
}

export default App
