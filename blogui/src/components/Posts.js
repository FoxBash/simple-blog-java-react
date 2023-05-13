import React from 'react'
import { useNavigate } from 'react-router-dom';

function Posts({post, deletePost}) {
    const navigate = useNavigate();
    const editPost = (e, id) =>{
        e.preventDefault();
        navigate("/editPost/"+id);
    }
  return (
    <>
        <tr className=' border px-2 py-2 odd:bg-slate-100 even:bg-slate-200' key={post.id}>
                    <td>{post.title}</td>
                    <td>
                        <a href='#' className='text-gray-500 px-4 hover:bg-black,rounded-md'
                        onClick={(e,id) => editPost(e,post.id)}>Edit</a>
                        <a href='#' className='text-red-500  hover:text-red-200' onClick={(e, id) => deletePost(e, post.id)}>Delete</a>
                    </td>
                </tr>
    </>    

  )
}

export default Posts