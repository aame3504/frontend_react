import './App.css'
import ScoresTable from './components/ScoresTable'
import { useState } from 'react'

const style = {
  width:"500px",
  height:"300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}

const initialscores = [
    {이름:"John", 국어: 90, 영어:90, 수학: 80, 과학: 80 },
    {이름:"Piter",국어: 90, 영어:90, 수학: 80, 과학: 80 },
    {이름:"Susan",국어: 90, 영어:90, 수학: 80, 과학: 80 },
    {이름:"Sue",국어: 90, 영어:90, 수학: 80, 과학: 80 },
    
  ]

const initialInfo = {
  name: "john",
  kor: null,
  eng: null,
  math: null,
  sci: null,
}

function App() {
  const [info, setInfo] = useState(initialInfo)
  const [scores, Setscores] = useState(initialscores)
  const handleChange = (event) => {
    const {name,value} = event.target;
    setInfo((prev)=>(
      {...prev, [event.target.name]: event.target.value}
    ))
    console.log(event.target.name)
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    Setscores((prev)=>(
      [...prev,info]
    ))
}
  
  return (
    <>
          <ScoresTable scores={scores}/>
          <form onSubmit ={handleSubmit}>
            <div>name: <input 
                type="text"
                name = "name"
                value = {info.name}
                  onChange={handleChange} 
                /></div>
            <div>kor: <input 
                type="number"
                name = "kor"
                value = {info.kor}
                onChange={handleChange} 
                /></div>
            <div>eng: <input 
                type="number"
                name = "eng"
                value = {info.eng}
                onChange={handleChange} 
                /></div>
            <div>math: <input 
                type="number"
                name = "math"
                value = {info.math}
                onChange={handleChange} 
                /></div>
            <div>sci: <input 
                type="number"
                name = "sci"
                value = {info.sci}
                onChange={handleChange} 
                /></div>
                <button>submit</button>
          </form>
    </>
    

  )
}
export default App
