import React, { SVGProps } from 'react'

type Props = {
  name: string
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

const HeaderItem: React.FC<Props> = ({ name, Icon }) => {
  return (
    <div className="flex flex-col items-center w-8 cursor-pointer group">
      <Icon />
      <p className="text-sm transition ease-in-out opacity-0 duration-250 group-hover:opacity-100">
        {name}
      </p>
    </div>
  )
}

export default HeaderItem
