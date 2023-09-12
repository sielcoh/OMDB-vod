import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

function VodInput() {
const [input , setInput] = useState("")
const nav = useNavigate()

  const onSearchClick = () => {
    nav(`/?s=${input}`)
  }
  const onKeyBoardClick=(e)=>{
    if(e.key =='Enter'){
      onSearchClick();
    }
  }
  


  return (
    <header className='container-fluid bg-dark p-2'>
      <div className='container'>
        <div className='row'>
          <div className='logo col-auto' >
          <Link style={{ textDecoration: 'none' }} to={'/'}><h2 className='text-white'>My VOD</h2></Link>
          </div>
          <nav className='d-flex col md-4'>
            <input onKeyDown={onKeyBoardClick} type='search' placeholder='Search...' className='form-control' onChange={(e)=>setInput(e.target.value)}/>
            <button className='btn btn-warning' onClick={onSearchClick}>Search</button>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default VodInput