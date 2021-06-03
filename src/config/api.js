import axios from "axios";

const instance = axios.create({
  baseURL: "https://red-envelope-movie-42b3d.web.app"
});

export default instance;
