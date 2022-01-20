import {useState,useEffect} from "react"
import Loader from  ".././loader/Loader"
  const url = "http://localhost:8000"

const PrivatePost = () => {
  const [postDb, setPostDb] = useState([]);
  const [loading,setLoading] = useState(true);
  
  //-----Fetching Post Details from Db-----
    const getPost = async ()=>{ 
    let localUser = JSON.parse(localStorage.getItem("user"));
     const id = localUser._id;
     
 let data = await fetch(`${url}/get_private_post/${id}`,{
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
   getPost() 
 },[]);
 
  if(loading){
   return <Loader />
 };
 
  console.log(postDb);
  
  
  return (
    <div className="showPostContainer">
        <h3> My Post </h3>
       <div className="showPost"> 
      { loading ?  <Loader /> 
         : postDb.map((postD)=>{
          return( <div className="postBox" key={postD._id}>
               <div className="postImg">
                  <img className="thumbnailImg" src="./images/default_profile.png" alt="thumbnail_mg..."/>
               </div>
               <div style={{marginLeft:"1em"}}> 
                 <div className="postTitle"> {postD.title} </div>
                 <p className="postDescription">
                     {postD.description}
                  </p>
                  <div className="postCategory">
                     <span>category: </span> {postD.category}
                  </div>
                    <span className="postDate">
                       {postD.createdAt && new Date(postD.createdAt).toDateString()}
                    </span>
                </div>
              </div>
             );
              })
          }
        </div>
    </div>
  );
}

export default PrivatePost
