import React, { Component } from 'react'
import'./style.css'
import Logo from './Logo'
import List from './List-link'
export class Nav extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       search:false
    }
  }
  setSearch=()=>{

    this.setState({search:!this.state.search})
  }
  
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg">
                <Logo search={this.state.search} setSearch={()=>this.setSearch()}/>
               <List/>
               </nav>
               <div className={this.state.search?'search-block':'search-block search-block-none'}>
                     <form className="form-inline">
                       <input className="input" type="search" placeholder="What are you looking" aria-label="Search"/>
                       <i className="fa fa-search"></i>
                     </form>
               </div>
            
            </div>
        )
    }
}

export default Nav
