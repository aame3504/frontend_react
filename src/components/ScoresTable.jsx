import React from 'react'



const scores = [
    {이름:"John", 국어: 90, 영어:90, 수학: 80, 과학: 80 },
    {이름:"Piter",국어: 90, 영어:90, 수학: 80, 과학: 80 },
    {이름:"Susan",국어: 90, 영어:90, 수학: 80, 과학: 80 },
    {이름:"Sue",국어: 90, 영어:90, 수학: 80, 과학: 80 },
  ]

function ScoresTable({scores}) {
  return (
    <table border="1">
      <thead>
        <tr>
          {
            Object.keys(scores[0]).map((key) => (
              <th key={key}>{key}</th>
            ))
          }
        </tr>
      </thead>

      <tbody>
        {
          scores.map((item, idx) => (
            <tr key={idx}>
              {
                Object.values(item).map((value, i) => (
                  <td key={i}>{value}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default ScoresTable
