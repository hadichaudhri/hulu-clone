import React, { SVGProps } from 'react'

type Props = {
  name: string
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

const HeaderItem: React.FC<Props> = ({ name, Icon }) => {
  return (
    <div className="group flex w-8 cursor-pointer flex-col items-center hover:font-bold hover:text-gray-200">
      <Icon />
      <p className="duration-250 text-sm opacity-0 transition ease-in-out group-hover:opacity-100">
        {name}
      </p>
    </div>
  )
}

export default HeaderItem
