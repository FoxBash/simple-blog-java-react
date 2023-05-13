import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PostService from '../service/PostService';

function EditPost() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [Post, setPost] = useState({
        id:id,
        title:"",
        body:""
    });
    const handleChange = (e) =>{
        e.preventDefault();
        const value = e.target.value;
        setPost({...Post,[e.target.name]:value});
    };
    useEffect((id) =>{

        const fetchData = async() =>{
            try{
            const response = await PostService.getPostById(id);
            setPost(response.data);
            }catch(errr){
                console.log(errr);
            }
        };
        fetchData();
          },[]);

const editNow = (e) =>{
    e.preventDefault();
    PostService.editPostPost(Post, id).then((response) =>{
        console.log(response)
        navigate("/postList");
    }).catch((errr) =>{
        console.log(errr);
    });
};

const cancel = (e) =>{
    e.preventDefault();
    navigate("/postList")
}
const reset = (e)=>{
    e.preventDefault();
    setPost({
        id:id,
        title:"",
        body:""
    })
}
  return (
  <div>
    <button className='bg-slate-500 hover:bg-slate-600 text-white font-semibold text-center'
    onClick={(e) => cancel(e)}
    >Back</button>
        <div className='shadow border-b max-w-4xl mx-auto my-2 bg-slate-400 text-center'>
      <div>
        <h1 className='font-bold bg-slate-500 text-center uppercase py-6 text-white' >Edit Post</h1>
        <div className='bg-slate-400 font-semibold uppercase text-white '>
    
            <div className='px-2 pt-2 '>
            <label className='text-justify'>Title:<br/>
            <input type="text" placeholder='Enter the title...' 
            className='text-center text-xl text-gray-800 font-semibold capitalize placeholder:italic bg-slate-200 px-1 py-1 '
            name='title'
            value={Post.title}
            onChange={(e) => handleChange(e)}/></label>
            </div>
            <div className='px-2 py-4'>
            <label className='text-justify'>Body:<br/>
            <textarea placeholder='The content goes here😉' 
            className='w-full h-40 px-4 text-gray-800 py-2 font-normal rounded-md placeholder:italic bg-slate-200'
            name='body'
            value={Post.body}
            onChange={(e) =>handleChange(e)}/></label>
            </div>
            <button type='submit' 
            className='bg-gray-700 px-4 py-2 my-1 rounded-md hover:bg-gray-500'
            onClick={(e) =>editNow(e)}>
              Submit Post
              </button>
              <button className=' bg-purple-600 px-4 py-2 mx-2 rounded-md hover:bg-purple-800'
              onClick={(e) =>reset(e)}>Clear</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default EditPost