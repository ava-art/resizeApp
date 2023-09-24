
const loadingResize = (loadingResize) =>{
  return{
    type: 'LOADING_RESIZE',
    payload: loadingResize
  }
}
const setStateForm = (val, item) =>{
  
  return{
    type: 'SET_STATE_FORM',
    val,
    item, 
  }
}





export {
  loadingResize,
  setStateForm,
}