import React, { useState } from "react";
import { connect } from "react-redux";
import { thunkPostItemsResize } from "../../../thunks/thunkPostItemsResize"

import ItemsComponent from "./items-component";
import { setStateForm } from "../../../action/actions";


const ItemsList = ({ thunkPostItemsResize, loadingResize, setStateForm, stateForm }) => {

  const sendFormResize = (e) => {
    e.preventDefault()
    stateForm.files.map(name =>{
      let newStateForm = stateForm
      newStateForm.files = [name]
      thunkPostItemsResize(newStateForm)
    })
    
  }

  const changeInput = (e, itemState) => {
    setStateForm(e.target.value, itemState)
  }
  const changeNF = (e, itemState) => {

    if (itemState === 'canvas'){
      let check900 = document.getElementById('check900').checked
      let check1000 = document.getElementById('check1000').checked
      setStateForm([check900 ? 900: false, check1000 ? 1000: false], itemState)
    } else{
      setStateForm(e.target.checked, itemState)
    }
  }

  const functionItem = {
    changeInput,
    changeNF
  }

  return (

    <ItemsComponent
      sendFormResize={sendFormResize}
      loadingResize={loadingResize}
      functionItem={functionItem}
      stateForm={stateForm}
      setStateForm={setStateForm}

    />
  )
}

const mapState = ({ loadingResize, stateForm }) => {
  return {
    loadingResize,
    stateForm
  }
}
const mapDispath = (dispatch) => {
  return {
    thunkPostItemsResize: (items) => dispatch(thunkPostItemsResize(items)),
    setStateForm: (val, item) => dispatch(setStateForm(val, item))
  }
}

export default connect(mapState, mapDispath)(ItemsList)