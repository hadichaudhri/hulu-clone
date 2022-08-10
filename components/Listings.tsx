import Movie from '../types/Movie'
import ListingItem from './ListingItem'

const Listings = ({ listings }: { listings: Movie[] }): JSX.Element => {
  return (
    <ul className="flex flex-wrap place-content-evenly px-4">
      {listings.map((listing: Movie) => (
        <li
          className="w-80 flex-grow cursor-pointer rounded-xl p-1 transition-colors delay-200 hover:bg-turquoise-600"
          key={listing.id}
        >
          <ListingItem {...listing} />
        </li>
      ))}
    </ul>
  )
}

export default Listings
