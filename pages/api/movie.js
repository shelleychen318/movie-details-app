import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://online-movie-database.p.rapidapi.com/title/find",
//   params: { q: "game of thr" },
//   headers: {
//     "X-RapidAPI-Key": "fb79d0b61bmsh8c210b58b25582ep1c2034jsndd9dae2bfb32",
//     "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     const options = {
//       method: "GET",
//       url: "https://online-movie-database.p.rapidapi.com/title/find",
//       params: { q: req.query.movieName },
//       headers: {
//         "X-RapidAPI-Key": "online-movie-database.p.rapidapi.com",
//         "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
//       },
//     };
//     axios
//       .request(options)
//       .then(function (response) {
//         res.status(200).json(response.data);
//       })
//       .catch(function (error) {
//         console.error(error);
//         res.status(response.status);
//       });
//   } else {
//     res.status(400);
//   }
// }

export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: "https://online-movie-database.p.rapidapi.com/title/find",
      params: { q: req.query.movieName },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.error(error);
        res.status(response.status);
      });
  } else {
    res.status(400);
  }
}