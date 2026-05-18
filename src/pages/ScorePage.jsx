import React, {useState} from 'react'
import ScoresTable from '../components/score/ScoresTable';
import Form from '../components/score/Form';


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

function ScorePage() {
    const [info, setInfo] = useState(initialInfo)
    const [scores, Setscores] = useState(initialscores)
  return (
    <>
      <ScoresTable scores={scores}/>
        <Form info={info} setInfo={setInfo} Setscores={Setscores}/>
          
    </>
  )
}

export default ScorePage
