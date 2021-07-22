
import React, { Component } from 'react'
import ProductList from './ProductList'
export default class Display extends Component {
    render() {
        console.log(this.props.searchFound)
        return (
            <div>
                {this.props.searchFound ? <h2>No products were found</h2> : (this.props.visibility ? <ProductList products={this.props.products}/> : <h2>No search results yet</h2>)}
            </div>
        )
    }
}