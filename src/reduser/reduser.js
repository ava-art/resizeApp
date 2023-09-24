

const initialState = {
  loadingResize: null,
  stateForm: {
    path: '',
    company: '',
    NF_holod: '',
    canvas: [900, 1000],
    files: [],
    succesfull:[]
  }
}

const reduser = (state = initialState, action) => {
  switch (action.type) {

    case 'LOADING_RESIZE':
      return {
        ...state,
        loadingResize: action.payload,
      }

    case 'SET_STATE_FORM':
    let item = action.item;
    let succ = state.stateForm.succesfull

    if (item === 'default') {
      return {
        ...state,
        orderPost: initialState.orderPost,
      }
    }
    if (item === 'succesfull'){
      succ.push(action.val)
    }
    if (item === 'def-files'){
      succ= []
    }


      return {
        ...state,
        stateForm: {
          path: item === 'path' ? action.val : state.stateForm.path,
          company: item === 'company' ? action.val : state.stateForm.company,
          NF_holod: item === 'NF_holod' ? action.val : state.stateForm.NF_holod,
          canvas: item === 'canvas' ? action.val : state.stateForm.canvas,
          files: item === 'files' ? action.val : state.stateForm.files,
          succesfull: item === 'succesfull' || item === 'def-files'  ? succ : state.stateForm.succesfull,
        }
      }



    default:
      return state
  }
}

export default reduser

