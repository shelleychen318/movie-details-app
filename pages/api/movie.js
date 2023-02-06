import axios from "axios";

const options = {
  method: "GET",
  url: "https://online-movie-database.p.rapidapi.com/title/find",
  params: { q: "game of thr" },
  headers: {
    "X-RapidAPI-Key": "fb79d0b61bmsh8c210b58b25582ep1c2034jsndd9dae2bfb32",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
