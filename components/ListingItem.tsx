import { Movie } from '../utils/requests'
import Image from 'next/image'

const ListingItem = (listing: Movie): JSX.Element => {
  return (
    <>
      <Image
        src={
          listing.poster_path
            ? 'https://images.tmdb.org/t/p/w500' + listing.poster_path
            : 'https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png'
        }
        width="500px"
        height="400px"
        layout="responsive"
      />
      {listing.title}
    </>
  )
}

export default ListingItem
