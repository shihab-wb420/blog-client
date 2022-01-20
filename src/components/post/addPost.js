// import from " ";
import {useState} from "react"
  //const url = "http://localhost:8000"
  const url = "https://blog-backend-wb505.vercel.app"

const AddPost = () => {
  const [postData, setPostData] = useState({
    title:"",
    description:"",
    category:""
  });
  const [error,setError]=useState(false);
  const [postAdded,setPostAdded] = useState(false)
  
  
  //------AddPost onChange Method---------
  const handlePostData = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setPostData({...postData, [name]:value});
  }
  
  const submitPostData = async () =>{
    const {title,description,category} = postData;
    if(!title || !description || !category){
      setError(true);
       return false;
    }
    let localUser = JSON.parse(localStorage.getItem("user"));
     let userId = localUser._id;
     let userName = localUser.name;
     let userImage = localUser.userImage;
     console.log(userName);
     
    let data = await fetch(`${url}/publish_post`,{
      method:"post",
      body: JSON.stringify({title,description,category,userId,userName,userImage}),
      headers:{
        "Content-Type":" application/json"
      }
    });
    data = await data.json();
    setPostAdded(true)
    setPostData({title:"",
    description:"",
    category:""})
  }
  
  
  return (
    <div className="addPostContainer">
           <h3>Add Post </h3>
        {postAdded && <p style={{ color:"green"}}> Successfully Post Published </p>}
          <div className="addPostForm commonFormStyle">
           <input type="text" 
               placeholder=" Title"
               name="title"
               value={postData.title}
               onChange={handlePostData}
            /> 
           { error && !postData.title && <span className="invalidInput" > Enter title </span>}
           
             <input type="text" 
              placeholder=" Category"
              name="category"
              value={postData.category}
              onChange={handlePostData}
           />
        { error && !postData.category&& <span className="invalidInput"> please Enter post category </span>}
        
           <textarea
               placeholder=" Description"
               className="description"
               name="description"
               value={postData.description}
               onChange={handlePostData}
            />
         { error && !postData.description && <span className="invalidInput"> write some content </span>}
        
           <button className="commonSubmitButton" type="submit" onClick={submitPostData}> Publish Post </button>
         </div>
         
        
    </div>
  );
}

export default AddPost
