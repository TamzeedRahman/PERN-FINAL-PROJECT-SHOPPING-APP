import React, { Component } from 'react'
import axios from 'axios'
import Display from './Display'
import './Home.css'
export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            input: "",
            result: "",
            products: [],
            visibility: false,
            searchFound: false,
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value,
        })
    }
    getProduct = async (keyWord)  =>{
        //apiKey is AIzaSyA2hz8e-TNG95kuho8zXFIOQGeOcs3VsL4
        const productData = await axios.get(`https://powerful-everglades-92762.herokuapp.com/`)
        console.log(productData.data.items)
        const productItems = productData.data.items
        if(productItems.length === 0) {
            this.setState({
                searchFound: true
            })
        }
        else {
            this.setState({
                searchFound: false
            })
        }
        this.setState({
            videos: productItems,
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        this.getProduct(this.state.input)

        this.setState({
            input: '',
            visibility: true,
        })
    }
    render() {
        return (
            <div className='home-page'>
                <h2>Search for the beauty product you looking for!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='input'></label>
                    <input type='text' placeholder='What product would you like to find?' value= {this.state.input} id='input' onChange={this.handleChange} /> 
                    <button>Submit</button>
                </form>
                <Display visibility={this.state.visibility} videos={this.state.products} searchFound={this.state.searchFound}/>
            </div>
        )
    }
}
