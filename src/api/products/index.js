import axios from "axios";
const url = process.env.REACT_APP_HOST + "/api/";
export const productApi = {
  getData: async () => {
    return await axios.get(url + "Products");
  },

  getProductById: async (id) => {
    return await axios.get(url + `Products/${id}`);
  },
};
