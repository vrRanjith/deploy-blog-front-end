import axios from "axios";

export async function getSinglePost(postId) {
    const res = await axios.get("https://ublog-api.onrender.com/api/posts/" + postId)
    return res.data;    
}