import React from 'react'
import {Slide,Fade} from'react-slideshow-image'
import './style.css'

const proprietes={
    duration:5000,
   transitionDuration:500,
   infinite:true,
}
 const Show=()=> {
    return (
        <div className="containerSlide">
             <Fade { ...proprietes}>
                  <div className="each-slide row p-0">
                     <div className="col-lg-6 main-img">
                         <img src={require("../../images/img1.jpg")}/>
                         <div className="main-text"> 
                              <h3> As5G arrives the biggest impact , will be in business</h3>
                             <span>plus</span>
                             <p>5g projects are in the way...</p>
                         </div>
                     </div>
                     <div className="col-lg-3 main-img">
                         <img src={require("../../images/city.jpg")}/> 
                         <div className="main-text" style={{top:'80%'}}> 
                             <p>lorem episum className do anything</p>
                         </div>  
                     </div>
                     <div className="col-lg-3 main-img" >
                         <img src={require("../../images/assistant.jpg")}/> 
                         <div className="main-text" style={{top:'80%'}}> 
                             <p>lorem episum className do anything</p>
                         </div> 
                     
                     </div>
                  </div>
                  <div className="each-slide row">
                      <div className="col-lg-3 main-img">
                               <img src={require("../../images/city.jpg")}/> 
                               <div className="main-text" style={{top:'80%'}}> 
                                    <p>lorem episum className do anything</p>
                               </div>  
                      </div>
                      <div className="col-lg-3 main-img">
                      <img src={require("../../images/city.jpg")}/> 
                         <div className="main-text" style={{top:'80%'}}> 
                             <p>lorem episum className do anything</p>
                         </div>  
                      </div>
                      <div className="col-lg-6 row img-gallery">
                          <div className="img-wraper">
                              <img src={require('../../images/img1.jpg')}/>
                              <p className="main-text">heloo</p>
                              </div>
                          <div className="img-wraper">
                              <img src={require('../../images/img1.jpg')}/>
                              <p className="main-text">heloo</p></div>
                          <div className="img-wraper">
                              <img src={require('../../images/img1.jpg')}/>
                              <p className="main-text">heloo</p>
                              </div>
                          <div className="img-wraper">
                              <img src={require('../../images/img1.jpg')}/>
                              <p className="main-text">heloo</p>
                              </div>

                    
                      </div>
                      
                  </div>
             </Fade>  
        </div>
    )
}
export default Show