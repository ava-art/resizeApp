import CarsStoreServices from "../services/cars-store-services";
import { setOrder } from "../action/actions";

const carsService = new CarsStoreServices()

export const thunkPostFoto = (file) => async (dispatch) => {

  try {
    await carsService.postFoto(file).
      then(res => res.text()).
      then(data =>dispatch(setOrder(data, 'foto')))

    
  } catch (error) {

  }



}

