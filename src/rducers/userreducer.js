const  userreducer=(state={
    username:'yacine',
    age:30
},action)=>{
    switch(action.type){
      case"setName":
      state={
          ...state,
          username:action.playload
      }
     
      break;
      case "setAge":
          state={
              ...state,
             age:action.playload
          }
        break;
    }
    return state
  
  }
  export default userreducer;