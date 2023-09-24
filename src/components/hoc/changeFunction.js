export default class ChangeFunction {

  changePhone = (e, setOrder, thunkPostoyannik) => {
    let val = e.target.value
    setOrder(val, 'phone')

    if (val.length > 8) {
      thunkPostoyannik(val)
    }
  }

  changeBronya = (e, setOrder) => {
    let val = e.target.value
    setOrder(val, 'bronya')
  }

  changeLoadFoto = (e, thunkPostFoto) => {
    let val = e.target.files[0]
    if (val) {
      thunkPostFoto(val)
    }
  }

  changeMoney = (e, setOrder, setWarningMoney) => {
    let val = e.target.value
    setOrder(val, 'money')
    setWarningMoney('')
  }

  changeOplata = (e, setOrder) => {
    let val = e.target.value
    setOrder(val, 'oplata')
  }
  changeTimer = (e, setOrder) => {
    let val = e.target.value
    setOrder(val, 'timer')
  }
  

  changeComment = (e, setOrder) => {
    let val = e.target.value
    setOrder(val, 'comment')
  }


  activateOrder = (btnOform, arrCheckedCars, setOrder, thunkToggleBtnOrder) => {

    if (btnOform.hidden === '' || btnOform.hidden === 'none') {
      
        
        setOrder(arrCheckedCars, 'items')
        thunkToggleBtnOrder('active')
      
    } else if (btnOform.hidden === 'active' && btnOform.text === 'X') {
      
        setOrder(arrCheckedCars, 'items')
        thunkToggleBtnOrder('none')
      
    }
  }

  postOrder = (e,thunkPostOrderCars,setOrder, orderPost, item, postoyannik, arrCheckedCars, thunkToggleBtnOrder  ) => {
    e.preventDefault();

      thunkPostOrderCars(orderPost, item, postoyannik)
      arrCheckedCars = []
      console.log(arrCheckedCars + 'В функциях');
      setOrder('default', 'default')

      thunkToggleBtnOrder('none')
      e.target.reset();
    }

  viewToggleBottom =  (e, idItem, viewBut, item, thunkGetNowGoItem, setViewBut) => {
    let id = e.target.id
    setViewBut(false)
   
    
      if (viewBut === id) {
        setViewBut(false)
      } else {
      //  thunkGetNowGoItem(item, idItem)
        setViewBut(id)
      }
    
  }


}