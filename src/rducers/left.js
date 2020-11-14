import { act } from "react-dom/test-utils";

const left=(state={
    left:10
 },action)=>{
     switch(action.type){
       case"ADD_LEFT":
       state={
         ...state,
         left:state.left +action.playload
       }
      
       break;
      
     }
     return state
   
   }
   export default left