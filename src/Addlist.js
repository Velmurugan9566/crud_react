import { useState } from "react";

function Addlist(){

   const [items,setitem]= useState([]);
   const [count ,setcount] =useState(1);

   function additem(){
         const name = 'Item '+ count;
         setitem(pre => {return [...pre,name]})
        setcount((pre)=> {return pre+1})
    }
   return(
        <>
        <h2>list</h2>
        <h2>count is {count}</h2>
        <button onClick={additem}>add</button>
        <ul>{
            items.map((e,index)=> <li key={index}>{e}</li>)
            }
        </ul>
        </>);}

        export default Addlist;