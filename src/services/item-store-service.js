export default class ItemStoreServices {


  postItemsResize = async function (items) {

    const res = await fetch('http://resi.ze/resize.php', {
      method: 'POST',
      body: JSON.stringify(items)
    })
    return res.json()
  }

}