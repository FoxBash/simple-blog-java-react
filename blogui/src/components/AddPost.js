import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostService from '../service/PostService';

function AddPost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    id:"",
    title:"",
    body:""
  });
 const handleChange =(e) =>{
  const value = e.target.value;
  setPost({...post,[e.target.name]:value})
 }
  const savePost = (e) =>{
    e.preventDefault();
    PostService.savePost(post).then((response) =>{
      console.log(response);
      navigate("/postList");
    }).catch((error) =>{
      console.log(error);
    })
  }
  const reset = (e) =>{
    e.preventDefault();
    setPost({
      id:"",
      title:"",
      body:""
    })
  }
  return (
    <div>
        <div className='shadow border-b max-w-4xl mx-auto my-2 bg-slate-400 text-center'>
      <div>
        <h1 className='font-bold bg-slate-500 text-center uppercase  py-6 text-white' >Add Post</h1>
        <div className='bg-slate-400 font-semibold uppercase text-white '>
          /** this is the title div */
            <div className='px-2 pt-2 '>
            <label className='text-justify'>Title:<br/>
            <input type="text" placeholder='Enter the title...' 
            className='text-center text-xl text-gray-800 font-semibold capitalize placeholder:italic bg-slate-200 px-1 py-1 '
            name='title'
            value={post.title}
            onChange={(e) => handleChange(e)}/></label>
            </div>

            /** this the body div  */
            <div className='px-2 py-4'>
            <label className='text-justify'>Body:<br/>
            <textarea placeholder='The content goes here😉' 
            className='w-full h-40 px-4 text-gray-800 py-2 font-normal rounded-md placeholder:italic bg-slate-200'
            name='body'
            value={post.body}
            onChange={(e) =>handleChange(e)}/></label>
            </div>
            <button type='submit' 
            className='bg-gray-700 px-4 py-2 my-1 rounded-md hover:bg-gray-500'
            onClick={(e) => savePost(e)}>
              Submit Post
              </button>
              <button className=' bg-purple-600 px-4 py-2 mx-2 rounded-md hover:bg-purple-800'
              onClick={(e) =>reset(e)}>Clear</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AddPost