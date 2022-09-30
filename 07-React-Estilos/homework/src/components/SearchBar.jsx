import React from 'react';
import s from './Searchbar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div className={s.bar}> 
        <input type="text" placeholder='Ciudad...' />
        <button className={s.btn} onClick={()=>onSearch("Agregando ciudad")}>Agregar</button>
     </div>
     )
};