const light=(state={
    li:true
  },action)=>{
    switch(action.type){
      case"turn-off":
      state={
          li:action.playload
      }
     
      break;
  
    }
    return state
  
  }
  export default light