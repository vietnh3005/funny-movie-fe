import axios from "axios";

class UserService {
    registerUser(user) {
        return axios.post("/users/register", JSON.stringify(user), {headers: {'Content-Type': 'application/json'}})
    }
    loginUser(user) {
        return axios.post("/users/login", JSON.stringify(user), {headers: {'Content-Type': 'application/json'}})
    }
    getUserById(id) {
        return axios.get(`/users/id/${id}`)
    }
}

export default new UserService();