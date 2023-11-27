import React, { useState } from "react";
import { render } from 'react-dom';


//Compteur
/*function Compteur () {
    const [count, setCount] = useState(0)
    
    const handleClick = function (e) {
        e.preventDefault()
        setCount(10)
    }
    
    return <button onClick={handleClick}>Nombre: {count}</button>
}*/

//Incrémentation
/*function Compteur () {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    
    const handleClick = function (e) {
        e.preventDefault()
        setCount(c => c +1)
    }

    const handleClick2 = function (e) {
        e.preventDefault()
        setCount2(c => c +2)
    }
    
    return <>
        <button onClick={handleClick}>Incrémenter: {count}</button>
        <button onClick={handleClick2}>Incrémenter: {count2}</button>
   </>
}*/

//Autre méthode
function useIncrement (initial, step) {
    const [count, setCount] = useState(initial)
    const increment = () =>{
        setCount(c => c + step)
    }
    return [count, increment]
}

function Compteur () {
    const [count, increment] = useIncrement(0, 2)
    return <button onClick={increment}>Incrémenter{count}</button>

}


    render (
        
        <div>
            <Compteur/>
        </div>,
        document.getElementById('app')
    )

