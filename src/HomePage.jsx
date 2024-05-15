import React from 'react'
import "./App.css"
import { useState } from 'react'

export default function HomePage(){


    const [result, setResult] = useState("")


    const handleChange = (e)=>{
        setResult(e.target.value)
    }

    const handleClick = (e)=>{
        setResult(result.concat(e.target.name))
        if(result === "Error"){
            setResult(e.target.name)
        }
    }

    const clear = (e)=>{
        setResult("")
    }

    const backspace = ()=>{
      setResult(result.slice(0,-1))
    }

    const calculate = () => {
        try {
          const calculatedValue = eval(result.toString()); 
          const roundedValue = Math.round(calculatedValue * 100) / 100; 
          setResult(roundedValue.toString()); 
        } catch (error) {
          setResult('Error');
        }
      };

  return (
    <div>
        <div className='container'>
            <form action="" onChange={handleChange}>
                <input type="text" value={result !== "" ? result : " "}/>
            </form>

            <div className='keypad'>
                <div className='first'>
                <button onClick = {clear} className='clear'>Clear</button>
                <button  onClick = {backspace} className='see'>C</button>
                <button onClick = {handleClick} name='/'className='div'>&divide;</button>
                </div>

                <div className='second'>
                <button onClick = {handleClick} name='7'>7</button>
                <button onClick = {handleClick} name='8'>8</button>
                <button onClick = {handleClick} name='9'>9</button>
                <button onClick = {handleClick} className='operators' name='*'>&times;</button>
                </div>
                
                <div className='third'>
                <button onClick = {handleClick} name='4'>4</button>
                <button onClick = {handleClick} name='5'>5</button>
                <button onClick = {handleClick} name='6'>6</button>
                <button onClick = {handleClick} className='operators' name='-'>&ndash;</button>
                </div>

                <div className='fourth'>
                <button onClick = {handleClick} name='1'>1</button>
                <button onClick = {handleClick} name='2'>2</button>
                <button onClick = {handleClick} name='3'>3</button>
                <button onClick = {handleClick} className='operators' name='+'>+</button>
                </div>
                
                <div className='fifth'>
                <button onClick = {handleClick} name='0'className='zero'>0</button>
                <button onClick = {handleClick} name='.'className='dot'>.</button>
                <button onClick={calculate} name='='className='equal'>=</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}
