import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Listings from '../components/Listings'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import requests from '../utils/requests'
import TmdbMovie from '../types/TmdbMovie'
import Movie, { validateMovie } from '../types/Movie'

export const Home = ({ results }: { results: Movie[] }): JSX.Element => (
  <div className="container">
    <Head>
      <title>Hulu Clone</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Nav />
    <Listings listings={results} />
  </div>
)

interface Props {
  results: Movie[]
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  const genre = context.query.genre?.toString() ?? 'fetchTrending'
  const results: Movie[] = await fetch(
    `https://api.themoviedb.org/3${requests[genre].url}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then((res) => res.results)
    .then((res) => res.map((tmdbMovie: TmdbMovie) => validateMovie(tmdbMovie)))
  return {
    props: {
      results: results,
    },
  }
}

export default Home
