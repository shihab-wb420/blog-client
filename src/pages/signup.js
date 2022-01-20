// import from " ";
import {useState,useEffect} from "react"
import{ Link, useNavigate} from "react-router-dom"
const url ="http://localhost:8000"

 const Signup = () => {
  const [error,setError] = useState(false);
  const navigate = useNavigate();
  
  const [signupData, setSignupData] = useState({
    name:"",
    email:"",
    password:""
  });
  
  //------Signup onChange Method---------
  const handleChange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setSignupData({...signupData, [name]:value});
  }
   
  //------Collecting signup form data------
 const handleSubmit = async () =>{
    const {name,email,password} = signupData;
    if(!name || !email || !password){
      setError(true);
       return false;
    }
    let data = await fetch(`${url}/register`,{
      method:"post",
      body: JSON.stringify({name,email,password}),
      headers:{
        "Content-Type":" application/json"
      }
    });
    data = await data.json();
    navigate("/login");
  }


    //------get localStorage data------
 useEffect(()=>{
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("login user", user)
  if(user){
    navigate("/");
  } 
 },[]);
 
 
  return (
    <div className="App">
       <h2>Registration</h2> <hr/>
  
       <div className="signupForm commonFormStyle">
           <input type="text" 
               placeholder="   Full-Name"
               name="name"
               value={signupData.name}
               onChange={handleChange}
            /> 
           { error && !signupData.name && <span className="invalidInput" > Enter Your Name </span>}
           <input type="email"
               placeholder="   E-mail"
               name="email"
               value={signupData.email}
               onChange={handleChange}
            />
         { error && !signupData.password && <span className="invalidInput"> Enter a valid email </span>}
           <input type="password" 
              placeholder="   Password"
              name="password"
              value={signupData.password}
              onChange={handleChange}
           />
     { error && !signupData.password && <span className="invalidInput"> Enter a valid password </span>}
     
           <button className="commonSubmitButton" type="submit" onClick={handleSubmit}> Create Account </button>
           
       </div>
       <span> Already Have an Account?</span> <Link to="/login">Login</Link>
    </div>
  );
}

export default Signup