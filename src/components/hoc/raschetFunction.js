import moment from "moment/moment";



export default class RaschetFunction {

    proverkaDayOr24 = function (timeOrSum, dateStart, countItems) {

        let nowDates = moment().format(`YYYY-MM-DD HH:mm:ss`);
        let toDay18 = moment().format('YYYY-MM-DD 18:00:00');
        let toDay24 = moment(dateStart).add(1, 'days').format(`YYYY-MM-DD HH:mm:ss`);
        let minKatki = Math.ceil(((nowDates - Date.parse(dateStart)) / 1000) / 60)
        
        if (timeOrSum > 700 && nowDates < toDay18 && minKatki < 480) {
          return (
             countItems * 700
          )
        } else if (timeOrSum > 1000 && nowDates < toDay24) {
          return (
            countItems * 1000
          )
        }else{
          return(
            timeOrSum
          )
        }
      }







      
}