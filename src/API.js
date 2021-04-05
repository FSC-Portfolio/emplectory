import axios from "axios";
// Set the number of results returned.
const RESULTS_NUM = 50;
// Localise the results so the formats look familiar.
const NATIONALITY = "au";
// Use a seed so the results are the same (then we can filter "our" employees)
const USE_SEED = "jayarghargh";
// Tie it together.
const BASE_URL = `https://randomuser.me/api/?results=${RESULTS_NUM}&nat=${NATIONALITY}`;

export default {
  search: function (seed = false) {
    if (seed) {
      return axios.get(BASE_URL + `&seed=${USE_SEED}`);
    } else {
      return axios.get(BASE_URL);
    }
  }
};