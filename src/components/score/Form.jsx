import React from 'react'


console.log("hello ScoreTable")

function Form({info, setInfo, Setscores}) {
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
  )
}

export default Form
