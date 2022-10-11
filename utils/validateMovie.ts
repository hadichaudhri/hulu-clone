import Movie from '../types/Movie'
import TmdbMovie from '../types/TmdbMovie'

const BASE_TMDB_IMAGE_PATH = 'https://images.tmdb.org/t/p/w500'
const validateMovie = (movie: TmdbMovie): Movie => {
  return {
    id: movie.id,
    title: movie.title ?? 'No Title Found',
    overview: movie.overview ?? 'No Information Found',
    poster_path:
      `${BASE_TMDB_IMAGE_PATH}${movie.poster_path}` ?? '/movie_placeholder.png',
    backdrop_path:
      `${BASE_TMDB_IMAGE_PATH}${movie.backdrop_path}` ??
      '/movie_placeholder.png',
  }
}
export default validateMovie
