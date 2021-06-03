import axios from "axios";

const instance = axios.create({
  baseURL: "https://red-envelope-movie.herokuapp.com/"
});

export default instance;
