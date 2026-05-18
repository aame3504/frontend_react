import React from 'react'
import { Link } from 'react-router-dom'

function HeaderBar() {
  return (
    <div>
      <Link style={{margin: "15px"}} to="/score"><button>ScorePage</button></Link>
      <Link style={{margin: "15px"}} to="/user"><button>UserPage</button></Link>
      <Link style={{margin: "15px"}} to="/employee"><button>EmployeePage</button></Link>
    </div>
  )
}

export default HeaderBar
