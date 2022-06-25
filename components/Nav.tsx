import { useRouter } from 'next/dist/client/router'
import requests from '../utils/requests'
const Nav = (): JSX.Element => {
  const router = useRouter()
  return (
    <nav className="relative ml-4">
      <div className="flex flex-row pb-3 ml-4 overflow-x-auto text-xl scrollbar-thin scrollbar-thumb-bgcolordark scrollbar-track-bgcolorlight scrollbar">
        {Object.entries(requests).map((obj, key) => (
          <div className="last:pr-4" key={key}>
            <h1
              className="pr-4 cursor-pointer whitespace-nowrap"
              onClick={() => router.push(`?genre=${obj[0]}`)}
            >
              {obj[1].title}
            </h1>
          </div>
        ))}
      </div>
      <div className="absolute top-0 bottom-0 right-0 w-2/12 bg-gradient-to-r from-transparent to-bgcolor" />
    </nav>
  )
}
export default Nav
