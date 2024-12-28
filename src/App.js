// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Textform from './components/Textform';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
 Route,
  Link,
  Routes
} from "react-router-dom";

 
function App() {
  const [mode, changeMode] = useState("warning"); // Initial mode set to "light"
  const [text, changeText] = useState("Dark Mode"); // Button text
  const [color, changeColor] = useState("black"); // Initial text color
  const [alert,setAlert]=useState(null);
  

  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type,

  })
  setTimeout(()=>setAlert(null),3000)
    
  }

  const removebgAllClasses =()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-primary');


  }
  const toggleButton = (cls) => {

    removebgAllClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === "warning") {
      document.body.style.backgroundColor = "#072942";
      document.body.style.color = "#fff";
      changeMode("white");
      changeColor("black");
      changeText("Light Mode"); // Update button text to switch back to light mode
      showAlert( cls+  "\t has been Enable","success")
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      changeMode("warning");
      changeColor("black");
      changeText("Dark Mode"); // Update button text to switch back to dark mode
       
    }
  };
  
  return (
  
    <Router>
      <Navbar  about="About" brand="TextUtils"  home="Home" contact="Contact" a_tag_color={color} text={text} mode={mode} toggleButton={toggleButton}/>
        
       <Alert  alert={alert} />
        
       <div className='container'>
        <Routes>
          
          <Route exact path="/About" element={<About about="About Us"></About>}/>
          
           <Route exact path="/home" element={<Textform  heading="Enter The text to analyze" />}/>
           
         
        </Routes>
        </div>
           
           
      
        
    </Router>
      
   
  );
  
}
export default App;
