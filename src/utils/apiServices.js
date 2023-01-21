import axios from 'axios';
import { apiKey, baseURL, basePosterURL } from './options';

axios.defaults.baseURL = baseURL;

export class movieAPI {
  init = async () => {
    await this.getTrending();
  };

  getTrendingMovies = async () => {
    const responce = await axios.get(`trending/movie/day?api_key=${apiKey}`);
    const trending = await responce.data.results;
    return await trending;
  };

  getMovie = async movieId => {
    const movie = await axios.get(
      `movie/${movieId}?api_key=${apiKey}&language=en-US`
    );

    const { genres, id, title, poster_path, vote_avarge, overview } =
      await movie.data;
    const posterPath = (await poster_path)
      ? `${basePosterURL + poster_path}`
      : 'https://via.placeholder.com/200x300';

    return { genres, id, title, posterPath, vote_avarge, overview };
  };

  getActors = async movieId => {
    const responce = await axios.get(
      `movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
    );

    const cast = await responce.data.cast;

    const actors = await cast.map(({ id, name, character, profile_path }) => {
      const actorPhotoPath = profile_path
        ? `${basePosterURL + profile_path}`
        : 'https://via.placeholder.com/150x200';

      return { id, name, character, actorPhotoPath };
    });

    return actors;
  };

  getReviews = async movieId => {
    const responce = await axios.get(
      `movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`
    );

    return await responce.data.results;
  };

  searchMovie = async query => {
    const responce = await axios.get(
      `search/movie?api_key=${apiKey}&language=en-US&query=${query}`
    );

    return await responce.data.results;
  };
}
