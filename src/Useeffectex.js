import { useState,useEffect } from "react";

function Timer(){
    const [count,setcount]=useState(1);
    useEffect(()=>{
        console.log('screen rendered');
        checkcount();
    });
    function checkcount(){
        if(count >10){
            setcount(1);
        }
    }
    function update(){
        setcount((pre)=> {return pre +1})
    }
    return (
        <>
        <h2>have a count {count}</h2>
        <button onClick={update}>update</button>
        </>
    )
}
export default Timer;