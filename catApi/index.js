const Axios = require("axios");

const fetchImg = () => Axios.get(`https://api.thecatapi.com/v1/images/search`);

module.exports = {
  fetchImg,
};
