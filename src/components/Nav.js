//import {useEffect} from "react";

import {
  Navbar,Container,Nav,NavDropdown,
} from "react-bootstrap"
import {Link} from "react-router-dom";
import {useState, useEffect} from "react"
import { useNavigate} from "react-router"
const url ="http://localhost:8000" 

const NavigationBar = () => {
  const navigate = useNavigate();
  const [error,setError] =useState(true)
   
    let userExist = JSON.parse(localStorage.getItem("user"));
    
const Logout =()=>{
    localStorage.removeItem("user");
    navigate("/login");
  }
  
  //----Open DropDown Menue----
  const OpenMenue = () =>{
     let menue = document.querySelector(".dropMenue");
     menue.classList.add("active")
  }
  //----Open DropDown Menue----
  const CloseMenue = () =>{
     let menue = document.querySelector(".dropMenue");
     menue.classList.remove("active")
  }
   
  
  return ( 
   
  
  <div className="NavBar">
    <Link id="logo" to="/"> Unity.IT</Link>
   <div class="linkBox">
  {userExist ?  
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/blog">Blog</Link>
    </li>
    <li>
       <div onClick={OpenMenue} className="dropdownButton">
       { userExist.userImage ?  
         <img src={`./images/${userExist.userImage}`} alt="profile.."/>
          : 
          <img src="./images/default_profile1.png" alt="Loading.."/>
            
          }
       </div>
    
        <div onClick={CloseMenue} className="dropMenue"> 
           <div className="menueItem">
              <Link to="/profile">Profile</Link> 
           </div>
           <div className="menueItem"> <Link to="/setting"> Settings</Link></div>
            {/*
            <div className="menueItem">Pricing</div>
           <div className="menueItem">Dashboard</div>
            */}
           
           <div onClick={Logout} className="menueItem">Logout</div>
            <div onClick={CloseMenue} className="closeMenue"> 
              ❌
           </div>
        </div>
    </li>
    
  </>
  :
  <>

    <li className="common">
      <Link to="/signup">Signup</Link>
    </li>
    
    <li className="common">
      <Link to="/login">Login</Link>
    </li>
  </>
   
  }
   </div>
  </div>


  );
}

export default NavigationBar ;
