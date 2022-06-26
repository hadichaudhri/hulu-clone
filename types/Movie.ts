import TmdbMovie from './TmdbMovie'

const BASE_TMDB_IMAGE_PATH = 'https://images.tmdb.org/t/p/w500'

const getImagePath = (listing: TmdbMovie): string => {
  if (listing.backdrop_path) {
    return `${BASE_TMDB_IMAGE_PATH}${listing.backdrop_path}`
  }
  if (listing.poster_path) {
    return `${BASE_TMDB_IMAGE_PATH}${listing.poster_path}`
  }
  return '/public/movie_placeholder.png'
}

type Movie = {
  id: number
  image_path: string
  overview: string
  title: string
}

export const validateMovie = (movie: TmdbMovie): Movie => {
  return {
    id: movie.id,
    title: movie.title ?? 'No Title Found',
    overview: movie.overview ?? 'No Information Found',
    image_path: getImagePath(movie),
  }
}

export default Movie
