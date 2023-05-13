import axios from "axios";

const POST_BASE_API="http://localhost:8080/api/v1/posts";

class PostService{
    static savePost(post){
        return axios.post(POST_BASE_API,post);
    };
    static getAllPost(){
        return axios.get(POST_BASE_API);
    };
    static getPostById(id){
        return axios.get(POST_BASE_API+"/"+id);
    };
    static editPostPost(post,id){
        return axios.put(POST_BASE_API+ "/"+id,post);
    };
    static deletePostById(id){
        return axios.delete(POST_BASE_API +"/"+id);
    };

}
export default PostService;