import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor () {
        super();
        this.state = {
            input: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.input
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        try {
            
        } catch (error) {
            return error
        }
    }

    render() {
        const {input} = this.state
        return (
            <div>
                <form>
                    <h1>Search SkinCare Product</h1>
                    <input
                        onChange={this.handleChange}
                        value={input}
                        type="text"
                        placeholder="Search Product Here... "
                    />
                    <button>Look it up!</button>
                </form>
            </div>
        )
    }
}
