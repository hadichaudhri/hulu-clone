import Image from 'next/image'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'
import React from 'react'
import HeaderItem from './HeaderItem'

const Header = (): JSX.Element => {
  return (
    <header className="flex flex-col justify-around p-8 pb-0 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-row justify-around">
        <HeaderItem name="HOME" Icon={HomeIcon} />
        <HeaderItem name="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem name="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem name="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem name="SEARCH" Icon={SearchIcon} />
        <HeaderItem name="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain m-0"
        alt="Hulu Logo"
        src={'https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png'}
        width={200}
        height={75}
      />
    </header>
  )
}
export default Header
