
import AddPost from "../../components/post/addPost"
import PrivatePost from "../../components/post/privatePost"

const Blog = () => {
  
  return (
    <div className="Blog" style={{height:"content-fit", width:"100%"}}>
         <AddPost /> <br/>
         <PrivatePost/>
    </div>
  );
}

export default Blog;
