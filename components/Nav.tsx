import { useRouter } from 'next/dist/client/router'
import genres from '../utils/requests'
import { useState } from 'react'
const Nav = (): JSX.Element => {
  const router = useRouter()
  const [currentSelection, setCurrentSelection] = useState(0)
  return (
    <nav className="relative ml-4">
      <div className="ml-4 flex flex-row overflow-x-auto pb-3 text-xl scrollbar-track-turquoise-400 scrollbar-thumb-turquoise-700 md:scrollbar-thin">
        {Object.entries(genres).map((genreObj, key) => (
          <h1
            className={`cursor-pointer whitespace-nowrap pr-4 underline decoration-transparent transition duration-700 ease-in-out last:pr-16 hover:text-gray-200 hover:decoration-gray-200 ${
              currentSelection === key && 'font-bold'
            }`}
            key={key}
            onClick={() => {
              setCurrentSelection(key)
              router.push(`?genre=${genreObj[0]}`)
            }}
          >
            {genreObj[1].title}
          </h1>
        ))}
      </div>
      <div className="pointer-events-none absolute top-0 bottom-0 right-[-1px] w-2/12 bg-gradient-to-r from-transparent to-turquoise-700" />
    </nav>
  )
}
export default Nav
