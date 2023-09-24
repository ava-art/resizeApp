import ItemStoreServices from "../services/item-store-service";

const itemService = new ItemStoreServices()

export const thunkUpdateBronya = (items,operand) => async (dispatch) =>{

  try {
   const res = await itemService.updateBronya(items,operand)
   //  убраем из массива не припаркованных машин, элемент с этим id в Редаксе.
    
  } catch (err) {
    console.log(err);
  }
  
}