import axios from "axios";

export async function registerUser(username, email, password) {
    const res = await axios.post("https://ublog-api.onrender.com/api/auth/register", {
        username, email, password
      });
    return res.data;
}
