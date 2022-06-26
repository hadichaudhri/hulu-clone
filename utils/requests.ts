const TMDB_API_KEY = '93fd2f41c8c7e5813520fcc9097cd0bd'
import TmdbMovie from '../types/TmdbMovie'

type RequestType = {
  title: string
  url: string
}

export type Page = {
  page?: number
  results: TmdbMovie[]
  total_pages?: number
  total_results?: number
}

const requests: Record<string, RequestType> = {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/movie/week?api_key=${TMDB_API_KEY}&language=en-US`,
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
  },
  fetchMysteryMovies: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=9648`,
  },
  fetchSciFiMovies: {
    title: 'Sci-Fi',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878`,
  },
  fetchWesternMovies: {
    title: 'Western',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=37`,
  },
  fetchAnimationMovies: {
    title: 'Animation',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16`,
  },
  fetchTVMovies: {
    title: 'TV Movies',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10770`,
  },
}

export default requests
