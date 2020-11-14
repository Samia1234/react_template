import React, { Component } from 'react'

export class List extends Component {
    render() {
        return (
            <div className="list-link">
            <ul class="navbar-nav">
              <li class="nav-item active">
                 <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
   <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
   <a class="nav-link" href="#">Pricing</a>
              </li>
 <li class="nav-item dropdown">
   <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     More
   </a>
   <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
     <a class="dropdown-item" href="#">Action</a>
     <a class="dropdown-item" href="#">Another action</a>
     <a class="dropdown-item" href="#">Something else here</a>
   </div>
 </li>

 <li class="nav-item">
   <a class="nav-link" href="#"> <i style={{color:'#E3007A'}} class="fa fa-user-plus"></i></a>
 </li>
</ul>
            </div>
        )
    }
}

export default List
