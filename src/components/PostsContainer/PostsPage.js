//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";

const PostsPage = (props) => {

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
         props.posts.map((postObj,index)=>{
            return <Post key={index} post={postObj} />
         })

      }
  
    </div>
  );
};

export default PostsPage;
