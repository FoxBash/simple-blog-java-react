import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Posts from './Posts';
import PostService from '../service/PostService';

function PostList() {
   const navigate = useNavigate();
   const [loading, setLoading] = useState(true);
   const [posts, setPosts] = useState(null);
   useEffect(() => {
     const fetchData = async() => {
        setLoading(true);
        try {
        const response = await PostService.getAllPost();
        setPosts(response.data);
            
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
     }
    fetchData();
   }, []);
   const deletePost = (e, id) =>{
    e.preventDefault();
    PostService.deletePostById(id).then((response) => {
        if(posts){
            setPosts((prevElement) =>
            prevElement.filter((post) =>post.id !== id))
    }  
    });
}
   
  
  return (
    <div>
        <button className='my-3 mx-4 px-4 py-2 text-white bg-slate-600 hover:bg-slate-400 rounded-md font-semibold'
        onClick={() => navigate("/addpost")}>
            Add Post
        </button>
        <div className='shadow border-b max-w-3xl mx-auto my-5 bg-slate-400'>
        <h1 className=' text-center font-bold uppercase py-4 px-4 antialiased text-white'>Posts</h1>
        <div >
         <table className='w-full'>
            <thead className='w-fit'>
                <tr>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
        {!loading && (
            <tbody className='w-full text-center '>
                {posts.map((post) =>(
                    <Posts deletePost={deletePost} post={post} key={post.id}/>
                ))}
            </tbody>
)}
         </table>
        </div>
      </div>
    </div>
  )
}

export default PostList