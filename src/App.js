import React, { useState } from 'react'
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const handleclick = (e) => {
    setInput(input.concat(e.target.name))
  }
  const handSpace = () => {
    setInput('')
  }
  const handleCalculator = () => {
    setInput(String(eval(input)))
  }

  return (
    <div className='content'>
      <center><h1>Calculator</h1></center> 
      <div className='container'>
        <input value={input} className='calculator-input' />
        <button onClick={handSpace}>c</button>
        <button className='calculator-one' onClick={handleclick} name='1'>1</button>
        <button className='calculator-two' onClick={handleclick} name='2'>2</button>
        <button className='calculator-three' onClick={handleclick} name='3'>3</button>
        <button onClick={handleclick} name='/'>/</button>
        <button className='calculator-one' onClick={handleclick} name='4'>4</button>
        <button className='calculator-two' onClick={handleclick} name='5'>5</button>
        <button className='calculator-three' onClick={handleclick} name='6'>6</button>
        <button onClick={handleclick} name='-'>-</button>
        <button className='calculator-one' onClick={handleclick} name='7'>7</button>
        <button className='calculator-two' onClick={handleclick} name='8'>8</button>
        <button className='calculator-three' onClick={handleclick} name='9'>9</button>
        <button onClick={handleclick} name='+'>+</button>
        <button className='calculator-one' onClick={handleclick} name='.'>.</button>
        <button className='calculator-two' onClick={handleclick} name='0'>0</button>
        <button className='calculator-three' onClick={handleCalculator} name='='>=</button>
        <button onClick={handleclick} name='*'>*</button>
      </div>
    </div>

  );
}

export default App;
