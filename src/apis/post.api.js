import axios from "axios";

export async function getAllPosts(search) {
	const res = await axios.get("https://ublog-api.onrender.com/api/posts/" + search)
	return res.data;
}