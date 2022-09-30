import React from 'react';
import s from './Card.module.css';


export default function Card(props) {
  // acá va tu código
  return (
  <div className={s.div}> 
    <button className={s.btn}onClick={props.onClose} >X</button>
    <h3 className={s.h3}>{props.name}</h3>
    <div>
      <p className={s.minmax}>Min</p>
      <p className={s.minmax}>Max</p>
    </div>
    <div>
      <p className={s.p}>{props.min}</p>
      <p className={s.p}>{props.max}</p>
    </div>
    
 <div>
 <img className={s.img}  src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
 </div>
    
  </div>
  )
};

