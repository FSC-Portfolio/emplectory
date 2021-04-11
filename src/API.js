import axios from "axios";
const BASE_URL = `https://randomuser.me/api/?`;

// get and return employees from randomuser.
export default {
  search: function (seed = false, numRes = 5, limitNationality = false) {
    let apiUrl;
    apiUrl = BASE_URL + `results=${numRes}`;
    apiUrl = seed ? apiUrl + `&seed=${seed}` : apiUrl;
    apiUrl = limitNationality ? apiUrl + `&nat=${limitNationality}` : apiUrl;

    return axios.get(apiUrl);
  }
};