import axios from "axios";

export async function getCategories() {
    const res = await axios.get("https://ublog-api.onrender.com/api/categories")
    return res.data;
}