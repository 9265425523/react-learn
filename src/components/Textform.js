import React, { useState } from 'react'
import Navbar from './Navbar';
 
export default function Textform(props) {

  const [text, setText] = useState(" ");
  const [alert,showAlert]=useState(null);
  const onchange = (event) => {
    // setText(event.target.value);
    setText(event.target.value);
  }
  const uppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
 
  }
  const LowerCase=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const clear=()=>{
    let newText='';
    setText(newText);
  }
  const copy=()=>{
   
    navigator.clipboard.writeText(text); 
    showAlert("copied to clipboard" ,'success');
     
  }
  const extraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" ")); 
  }
  return (
    <div>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <label for="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={onchange} style={{backgroundColor:props.mode==='dark'?'var(--lack)' :'white'}} id="myBox"   rows="8"></textarea>
      </div>

      <button className='btn btn-primary mx-2 my-1'   onClick={uppercase}  >Covert To Uppercase </button>
      <button className='btn btn-primary mx-2 my-1'  onClick={LowerCase}  >Covert To LowerCase </button>
      <button className='btn btn-primary mx-2 my-1' onClick={clear}  >Clear Text </button>
      <button className='btn btn-primary mx-2 my-1' onClick={copy}  >Copy </button>
      <button className='btn btn-primary mx-2 my-1' onClick={extraSpaces}  >Clear extraSpaces </button>

 <div className='Container my-5'>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").filter((element)=>{return element.length!=0 }).length} word and {text.length}  character</p>
  <p>{0.032 * text.split(" ").length} Minutes read</p>
  <h4>Preview</h4>
  <p>{text.length>0?text:'Nothing to preview'}</p>
 </div>
    </div>
  )
}
