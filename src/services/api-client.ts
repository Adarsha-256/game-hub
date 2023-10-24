import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e19167f505dd4c638f948d57b5a61ddb",
  },
});
