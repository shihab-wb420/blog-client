import React,  {useEffect,useState} from "react"
import {Navigate,Outlet} from "react-router-dom"

const Private = () => {
 const [userExist,setUserExist] = useState({});
  
/*  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem("user"));
     console.log("protected user", user)
     setUserExist(user)
  },[])*/
  
   let user = JSON.parse(localStorage.getItem("user"));
      
      
  return user? <Outlet /> : <Navigate to="/login"/>
}
export default Private