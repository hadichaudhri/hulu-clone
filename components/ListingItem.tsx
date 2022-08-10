import Movie from '../types/Movie'
import Image from 'next/image'

const ListingItem = (listing: Movie): JSX.Element => {
  return (
    <>
      <div className="relative mb-2 h-40 transition-transform delay-150 duration-200 hover:z-10 hover:scale-[1.04]">
        <Image
          className="cursor-pointer rounded-xl bg-turquoise-400"
          alt={`${listing.title} Poster`}
          src={listing.backdrop_path}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <span className="line-clamp-1">{listing.title}</span>
    </>
  )
}

export default ListingItem
