import axios from "axios";
const apiUrl = `${process.env.REACT_APP_API_URL}/todos`;

const insertAsync = async (data) => {
    const response = await axios.post(apiUrl, data);
    return response;
}
const getAllAsync = async ()=>{
    const response = await axios.get(apiUrl);
    return response;
}