import React, { Component } from 'react'
import'./style.css'
export class Cont extends Component {
    render() {
        return (
            <div className="row main-cont">
                <div className="col-lg-8">
                    <div className="headding"><h1><span>Just now</span></h1></div>
                   <div className="cont">
                         <div className="child-cont">
                              <img src={require('../../images/img1.jpg')}/>
                              <div className="child-info">
                                         <p>This rare working Apple-1 with an unusual processor is up for auction</p>
                                         <span>1 day ago</span>
                             </div>
                         </div>
                        
                         
                        
                        
                
                   </div>
               
                

                </div>
                <div className="col-lg-4 leters">
                <div className="headding"><h1><span>letters</span></h1></div>
                <div>
                    <h2>Title</h2>
                    <p>Paragraph</p>
                    <form>
                        <input type="text"/>
                        <button className="btn-sub">Subscribe</button>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Cont
