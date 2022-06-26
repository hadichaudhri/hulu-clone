import Movie from '../types/Movie'
import ListingItem from './ListingItem'

const Listings = ({ listings }: { listings: Movie[] }): JSX.Element => {
  return (
    <ul className="flex-wrap justify-evenly">
      {listings.map((listing: Movie) => (
        <li key={listing.id}>
          <ListingItem {...listing} />
        </li>
      ))}
    </ul>
  )
}

export default Listings
