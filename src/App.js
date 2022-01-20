import './App.css';
import {BrowserRouter as Router, 
        Routes, 
        Route} from "react-router-dom"
import React,  {useEffect,useState} from "react"
import Nav from "./components/Nav"
import Private from "./components/Private"
import Home from "./pages/home"
import Blog from "./pages/blog/blog"
import Signup from "./pages/signup"
import Login from "./pages/login"
import About from "./pages/about"
import Profile from "./pages/profile"
import Setting from "./pages/settings/setting"
import SinglePost from "./pages/singlePost/singlePost"
//import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [userExist,setUserExist] = useState({});
  
  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem("user"));
     setUserExist(user)
     console.log("nav user", user)
  },[])
  
  return (
    <Router>
      <Nav userExist={userExist} />
    <div className="App">
      <Routes>
        <Route element={<Private />}>
         <Route exact path="/" element={ <Home />}/>
         <Route  path="/blog" element={ <Blog />}/>
         <Route  path="/profile" element={ <Profile />}/>
         <Route path="/setting" element={<Setting />}/>
         <Route path="/single/:id" element={<SinglePost />}/>
        </Route>
    
         <Route path="/about" element={ <About />}/>
         <Route path="/login" element={ <Login />}/>
         <Route path="/signup" element={ <Signup />}/>
         
      </Routes>
     </div>
    </Router>
  );
}
export default App;
