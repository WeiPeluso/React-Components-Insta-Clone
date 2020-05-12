//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import data from  "../../dummy-data"
// import data 

const PostsPage = () => {
  // set up state for your data
  const [posts,setPosts]=useState(data)
  //console.log(posts)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
         posts.map((postObj,index)=>{

            return <Post key={index} post={postObj} />
         })

      }
  
    </div>
  );
};

export default PostsPage;
