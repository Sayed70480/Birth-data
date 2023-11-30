import React from 'react'
// import FormList from './Component/FormList'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowData from './Component/ShowData';
import app from './app.css'


function App() {
  return (
    <div className='App' >
        <h2 className='text'>Birth Data</h2>
      <div className='formData'>
      <ShowData/>

      </div>
     
    </div>
  )
}

export default App