import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import Components
import Homepage from './components/Homepage.jsx'
import EmployeePage from './components/EmployeePage.jsx'


function App() {
  return (
    <>
      <div style={{display: 'flex', flexWrap: 'wrap', border: 'gray solid 1px'}}>

        <div className='homepage' style={{ width: '22vw' }}>
          <Homepage />
        </div>

        <div className='employee-page' style={{ width: '22vw' }}>
          <EmployeePage />
        </div>

      </div>
    </>
  )
}

export default App
