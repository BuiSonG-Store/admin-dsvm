import axios from "axios";

const url =process.env.REACT_APP_HOST + "/api/Regions/";
export const regionApi = {
  getData: async () => {
    return await axios.get(url);
  },
  getRegionById: async (id)=>{
    return await  axios.get(url+id);
  },
};
