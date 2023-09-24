import React from "react";
import Spinner from "../../spinner/spinner"

import './style.css'
import DropzoneComponent from "../../drag-on-drop/drop-component";



const ItemsComponent = ({ sendFormResize, loadingResize, functionItem, stateForm, setStateForm }) => {



  return (

    <div className="container">
      <div className="wrap-form">
        <form className="form-resize" id="form" onSubmit ={sendFormResize}>
          <input type="text"
               onChange={(e) => functionItem.changeInput(e, 'path')}
              className="input-path" placeholder="Путь до фото" required name="dir-path" />
          <div className="checked-block">
            <span>
              <input onChange={(e) => functionItem.changeInput(e, 'company')} type="radio" name="company" required value="hiberg" />
              <span>HIBERG</span>
            </span>
            <span>
              <input onChange={(e) => functionItem.changeInput(e, 'company')} type="radio" name="company" required value="nordfrost" />
              <span>NORDFROST</span>
            </span>
          </div>
          {
            stateForm.company === 'nordfrost' &&
            <div>
              <span>
                <input type="checkbox"
                onChange={(e) => functionItem.changeNF(e, 'NF_holod')} name="nf-refregirator" />
                <span>(NORDFROST Холодильники)</span>
              </span>
            </div>
          }
          <div className="checked-block">
            <span>
              <input type="checkbox" id="check900"  onChange={(e) => functionItem.changeNF(e, 'canvas', 900)} name="size900" defaultChecked />
              <span>900x1200</span>
            </span>
            <span>
              <input type="checkbox" id="check1000" onChange={(e) => functionItem.changeNF(e, 'canvas', 1000)} name="size1000" defaultChecked />
              <span>1000x1000</span>
            </span>
          </div>
          {/* <input type="file" name="foto[]" className="input-foto" accept=".png" required multiple /> */}
          < DropzoneComponent setStateForm={setStateForm} stateForm={stateForm} />
          <button className="button-submit"  type="submit" name="load_foto">Зупустить</button>
        </form>
      </div>
      {
        loadingResize
        &&
        <div className="modal-wrap-black">
          <Spinner />
        </div>
      }
    </div >

  )
}

export default ItemsComponent

