import React, { Component } from 'react'
import { apiURL } from "../Components/apiURL";
import ProductList from '../Components/ProductList'
import './Home.css'
const API = apiURL();
export default class Home extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render() {
        return (
            <section>
                <div className='home-page'>
                    <h2>Which beauty product would you like to buy!</h2>
                </div>  
                <div className='products'>
                    <ProductList/>
                </div>
            </section>
        )
    } 
}
