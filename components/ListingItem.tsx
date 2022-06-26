import Movie from '../types/Movie'
import Image from 'next/image'

const ListingItem = (listing: Movie): JSX.Element => {
  return (
    <>
      <div className="relative h-80 w-800">
        <Image
          alt="hi"
          src={listing.image_path}
          objectFit="contain"
          layout="fill"
        />
      </div>
      {listing.title}
    </>
  )
}

export default ListingItem
