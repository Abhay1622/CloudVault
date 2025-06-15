import React from 'react'
import Image from 'next/image'
import { Input } from './ui/input'

const Search = () => {
  return (
    <div className="search">
      <div className="search-input-wrapper">
        <Image
          src="/assets/icons/search.svg"
          alt="Search"
          width={24}
          height={24}
        />
        <Input
          // value={}
          placeholder="Search..."
          className="search-input"
          // onChange={(e) => setQuery(e.target.value)}
        />
        </div>
        </div>
  )
}

export default Search