
import React, { Component } from 'react'
import VideoList from './VideoList'
export default class Display extends Component {
    render() {
        console.log(this.props.searchFound)
        return (
            <div>
                {this.props.searchFound ? <h2>No videos were found</h2> : (this.props.visibility ? <VideoList videos={this.props.videos}/> : <h2>No search results yet</h2>)}
            </div>
        )
    }
}