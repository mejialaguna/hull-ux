const api_key = process.env.api_key;
const url = `/discover/movie?api_key=${api_key}&with_genres=`;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${api_key}&language=en-us`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${api_key}&language=en-us`,
  },
  fetchActionMovies: {
    title: "Action",
    url: url.concat("28"),
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: url.concat("35"),
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: url.concat("27"),
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: url.concat("10749"),
  },
  fetchMystery: {
    title: "Mystery",
    url: url.concat("9648"),
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: url.concat("878"),
  },
  fetchWestern: {
    title: "Western",
    url: url.concat("37"),
  },
  fetchAnimation: {
    title: "Animation",
    url: url.concat("16"),
  },
  fetchTvMovie: {
    title: "TV Movie",
    url: url.concat("10770"),
  },
};
