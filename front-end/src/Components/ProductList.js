
import React, { Component } from 'react'
import { useState, useEffect } from "react";
import {Link, BrowserRouter as Router} from 'react-router-dom'
import './ProductList.css'
import Product from './Product'
import axios from "axios";
import { apiURL } from "./apiURL.js";
const API = apiURL();

function ProductItems(props) {
  const [productItems, setProductItems] = useState([]);
  useEffect(() => {
    axios
      .get(`https://powerful-everglades-92762.herokuapp.com/products`)
      .then(
        (response) => {
          console.log(response)
          setProductItems(response.data);
        });
  }, []); 

  return (            
  <div className='Product'>
      <section className='product'>
        {productItems.map((productItem) => {
          return(
            <Product key={productItem.id} name={productItem.name} url={productItem.url} price={productItem.price} detail={productItem.detail}/>
          )
        })}
      </section>
    )
  </div>)
}
export default ProductItems;
