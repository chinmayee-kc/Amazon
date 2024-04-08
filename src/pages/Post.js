// import React from 'react';
import React, {useState,useEffect} from 'react';
// import Posts from './pages/Post';
function Posts() {
    const [posts,setPosts] = useState([]);

    const fetchPosts = async  () =>{
        try {
            let url = 'https://dummyjson.com/posts';
            const response= await fetch(url,{
                method:"GET"
            });
            const data= await response.json();
            setPosts(data.posts)
            console.log("pro",data.posts)
        }catch(error){
            console.log("Error fetching posts:",error)
        }
    };
    useEffect(()=>{
      fetchPosts();
    },[]);
  return (
    <>
     {Array.isArray (posts)?(posts.map((posts,index)=>(
        <div key={index}>
          <h2>{posts.title}</h2>
          <p>Id: {posts.id}</p>
          <p>Body: {posts.body}</p>
          <p>userId: {posts.userId}</p>
          <p>tags: {posts.tags}</p>
          <p>Reactions: {posts.reactions}</p>
        </div>
      ))
      ):
    (
      <p>Loading..</p>
      )}
    </>
  )
}

export default Posts;