// import from " ";
import{ useNavigate, Link} from "react-router-dom"
import {useState, useEffect} from "react"
const url ="http://localhost:8000"

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email:"",
    password:""
  });
  const [error,setError]=useState(false);

 //------Login onChange Method---------
  const handleChange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setLoginData({...loginData, [name]:value});
  }
 
  
//------Collecting login form data------
  const handleLogin = async (e) =>{
    e.preventDefault();
    const {email,password} = loginData;
    if( !email || !password){
      setError(true);
       return false;
    }
    let data = await fetch(`${url}/login`,{
      method:"post",
      body: JSON.stringify({email,password}),
      headers:{
        "Content-Type":" application/json"
      }
    });
    data = await data.json();
   localStorage.setItem("user", JSON.stringify(data));
    navigate("/");
    if(!data){
        alert("user not found")
    }
 };
  
    //------get localStorage data------
 useEffect(()=>{
  let user = JSON.parse(localStorage.getItem("user"));
  if(user){
    navigate("/");
  } 
  console.log("login user", user)
 },[]);
  
  return (
    <div className="App">
       <h2>Login</h2> <hr/>
       <div className="signupForm commonFormStyle">
           <input type="email"
               placeholder="   E-mail"
               name="email"
               value={loginData.email}
               onChange={handleChange}
            />
         { error && !loginData.email && <span className="invalidInput"> Enter a valid email </span>}
         
           <input type="password" 
              placeholder="   Password"
              name="password"
              value={loginData.password}
              onChange={handleChange} 
           />
       { error && !loginData.password && <span className="invalidInput"> Enter a valid password </span>}
       
           <button className="commonSubmitButton" onClick={handleLogin}> Login </button>
       </div>
       <span> Don't Have Account?</span> <Link to="/signup"> Create Account</Link>
       
    </div>
  );
}

export default Login
