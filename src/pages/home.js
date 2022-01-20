//import from " ";
import {useState,useEffect} from "react"
import{useNavigate} from "react-router-dom"
import PublicPost from "../components/post/publicPost"
import Loader from  "../components/loader/Loader"
const url = "http://localhost:8000"

const Home = () => {
  
  let navigate = useNavigate();
  const [postDb, setPostDb] = useState([]);
  const [loading,setLoading] = useState(true);
 //-------User Authorizing using localStorage data-------
 const [userExist,setUserExist] = useState({});
  
 
  
 if(userExist){
   console.log("user authorize...")
   } else{
     navigate("/login")
   }
   
  //-----Fetching Post Details from Db-----
 const getAllPost = async ()=>{ 
 let data = await fetch(`${url}/get_public_posts`,{
      method:"get",
      headers:{
        "Content-Type":" application/json"
      }
    });
   data = await data.json();
    setPostDb(data);
    setLoading(false);
  }
  
  useEffect(()=>{
    getAllPost()
  },[])
  console.log(postDb)
  
  //-----local user 
  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem("user"));
     console.log("nav user", user)
     setUserExist(user)
  },[])
  
  return (
   
    <div className="App">
       <h2> Public Post </h2> <hr/>
       { loading ? <Loader /> :
      <PublicPost allPosts={postDb}/>
       }
    </div>
    

  );
}

export default Home;
