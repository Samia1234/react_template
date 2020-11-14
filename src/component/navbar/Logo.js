import React, { Component } from 'react'
import './style.css'
export class Logo extends Component {
    render() {
        return (
            <div className="logo-div">
            <div className="logo">logo</div>
            <div className="search-icon" onClick={this.props.setSearch
            }><i  className="fa fa-search"></i></div>
        </div>
        )
    }
}

export default Logo
