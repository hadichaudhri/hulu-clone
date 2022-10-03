import Movie from '../types/Movie'
import Image from 'next/image'
import { useState } from 'react'

const ListingItem = (listing: Movie): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true)
  const [imgSrc, setImgSrc] = useState(listing.backdrop_path)

  return (
    <>
      <div className="relative mb-2 h-40 transition-transform delay-150 duration-200 hover:z-10 hover:scale-[1.04]">
        <Image
          className={`cursor-pointer rounded-xl bg-turquoise-300 ${
            isLoading && 'animate-pulse'
          }`}
          alt={`${listing.title} Poster`}
          src={imgSrc}
          objectFit="cover"
          layout="fill"
          onLoadingComplete={() => setIsLoading(false)}
          onErrorCapture={() => setImgSrc(listing.poster_path)}
        />
      </div>
      <span className="line-clamp-1">{listing.title}</span>
    </>
  )
}

export default ListingItem
