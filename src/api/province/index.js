import axios from "axios";

const url =process.env.REACT_APP_HOST + "/api/Provinces/";
export const provincesApi = {
  getData: async () => {
    return await axios.get(url);
  },
  getProvinceById: async (id)=>{
    return await  axios.get(url+id);
  },
};
