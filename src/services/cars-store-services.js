export default class CarsStoreServices {

  getNoPargingItems = async function (url) {
    const res = await fetch(`https://welotochka.ru/server/get/get-no-parking-cars.php`, {
      method: 'post',
      body: JSON.stringify(url)
    })
    return res.json()
  }


  postOrderCars = async function (data, item) {
    let arData = [data, item]
    
      const res = await fetch('https://welotochka.ru/server/post/order-cars.php', {
        method: 'post',
        body: JSON.stringify(arData)
      })
      return res.json()
    
  }

  putCarParking = async function (data, item) {
    let arData = [data, item]
    const res = await fetch('https://welotochka.ru/server/put/put-car-parking.php', {
      method: 'post',
      body: JSON.stringify(arData)
    })
    return res
  }
  putParkingSecItem = async function (item) {

    const res = await fetch('https://welotochka.ru/server/put/put-parking-sec-item.php', {
      method: 'post',
      body: JSON.stringify(item)
    })
    return res
  }

  getItems = async (url) => {

    const res = await fetch(`https://welotochka.ru/server/get/get-cars.php`, {
    // 
    method: 'post',
      body: JSON.stringify(url)
    })
    return res.json()
  }

  getStatistics = async (varStat,startDate, endDate) =>{
    let arData = [varStat, startDate, endDate]
    const res = await fetch(`https://welotochka.ru/server/get/get-statistics.php`, {
      method: 'post',
      body: JSON.stringify(arData)
    })

    return res.json()
  }

  getPostoyannik = async (phone) => {

    const res = await fetch(`https://welotochka.ru/server/get/get-postoyannik.php`, {
      method: 'post',
      body: JSON.stringify(phone)
    })
    return res.json()
  }

  postFoto = async (file) => {

    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', file.name.replace(/\s/gi, "_"));

    const res = await fetch(`https://welotochka.ru/server/post/upload-foto.php`, {
      method: 'post',
      body: formData,

    })
    return res
  }

  getNowGoItem = async (item, id) => {
    let arData = [item, id]

    const res = await fetch(`https://welotochka.ru/server/get/get-item-now-go.php`, {
      method: 'post',
      body: JSON.stringify(arData),

    })
    return res.json()
  }






}

