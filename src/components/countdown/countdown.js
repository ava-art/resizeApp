import React, {useState, useEffect} from "react";

const CountDown = ({ hours =0 , minutes=0 , seconds=0 , theEndTimer }) => {
 
  const [over, setOver] = useState(false);
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (over) return;
    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  if(h===0 && m===0 && s===0){
   
    return (

      <div>
        <p>паркуй</p>
      </div>
    )
  }

  if(h===0 && m===0 && s===20){
    return (
      alert('У  осталось 20 сек!')
    )
  }

  
  return (
    <div>
      
      {over ? '' : <p>{`${h.toString().padStart(2, '0')}:${m
        .toString()
        .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>}
        
        
        
      
     
    </div>
  );
};

export default CountDown