import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [mode,changeMode]=useState("dark");
  const toggleButton=()=>{

    if(mode==="dark"){
      changeMode("primary");
    }
  }
  return (
    <div>
    <nav class={`navbar px-3 navbar-expand-lg navbar-light bg-${props.mode}`}>
<Link class={`navbar-brand text-${props.a_tag_color}`} to="#">{props.brand}</Link>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
  <div class="collapse navbar-collapse justify-content-between px-4" id="navbarNav">
  <ul class="navbar-nav  ">
    <li class="nav-item active">
      <Link class={`nav-link text-${props.a_tag_color}`} to="/home">{props.home} </Link>
    </li>
    <li class="nav-item">
      <Link class={`nav-link text-${props.a_tag_color}`} to="/About">{props.about}</Link>
    </li>
    {/* <li class="nav-item">
      <Link class={`nav-link text-${props.a_tag_color}`} to="/">{props.contact}</Link>
    </li> */}
  </ul>

  
</div>
<div className='d-flex'>
  <div className='bg-primary rounded mx-2' onClick={()=>(props.toggleButton('primary'))} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
  <div className='bg-secondary rounded mx-2' onClick={()=>(props.toggleButton('secondary'))} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
  <div className='bg-success rounded mx-2' onClick={()=>(props.toggleButton('success'))} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
  <div className='bg-danger rounded mx-2' onClick={()=>(props.toggleButton('danger'))} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>


  </div>
  {/* <div class={`form-check form-switch float-end text-${props.mode==='dark'?'white':'dark'}`} >
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleButton} />
  <label class={` form-check lebel text-${props.a_tag_color}`} for="flexSwitchCheckDefault">{props.text}</label>
</div> */}
</nav>
    </div>
  )
}








 