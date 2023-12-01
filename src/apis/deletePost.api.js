import axios  from "axios";

export async function deletePost(post, user) {
    try {
        await axios.delete("https://ublog-api.onrender.com/api/posts/" + post._id, {data: {username: user.username}});
        window.location.replace("/");
    }
    catch (err) {
        console.log(err)
    }
}