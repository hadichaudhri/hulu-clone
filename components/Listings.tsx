import { Movie, Page } from '../utils/requests'
import ListingItem from './ListingItem'

const Listings = ({ listings }: { listings: Page }): JSX.Element => {
  return (
    <ul>
      {listings.results.map((listing: Movie) => (
        <li key={listing.id}>
          <ListingItem {...listing} />
        </li>
      ))}
    </ul>
  )
}

export default Listings
