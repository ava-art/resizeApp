import { loadingResize, setStateForm } from "../action/actions";
import ItemStoreServices from "../services/item-store-service";

const itemService = new ItemStoreServices()

export const thunkPostItemsResize = (items) => async (dispatch) => {

  dispatch(loadingResize('loading'))

  try {
  
    await itemService.postItemsResize(items).then(data => {
      
     
      return(
       dispatch(setStateForm(data[0].succesfull, 'succesfull'))
        )
    })
    
    
  } catch (error) {
    console.log(error);
  //  dispatch(setErrorServer('Ошибка отправки!'))
  }

  dispatch(loadingResize(null))

}
