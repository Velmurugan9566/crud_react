import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

function ChangeColor(){
     //const navigate = useNavigate();
  const [colorr,setColor] =useState({
    brand:'alto',
    color:'yellow',
    size:'4000'
  });
  function change(){
         //navigate('./Cssexample');
    if (colorr.color === 'yellow'){
        setColor((previous)=> {return {...previous , color:'blue'}})
    }
    else{
        setColor((previous)=> {return {...previous , color:'Yellow'}})
    }
    
  }

  return(
      <>
      <h2>selected brand is {colorr.brand} color is {colorr.color} size is {colorr.size}</h2>
      <button onClick={ change } >click</button>
      </>);
}
export default ChangeColor;

