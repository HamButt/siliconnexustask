import React from 'react'
import Image from 'next/image'
import JonathanImage from '../../public/jonathan.jpg'
import { SearchIcon } from '../SidebarIcons/Icons'

function Headbar() {
  return (
    <div>
        <div className="header flex items-start justify-between p-5 bg-[#EFF3FD] ">
            <div className='search__input bg-white flex items-center rounded-md p-2 w-[465px]'>
                <SearchIcon  />
                <input type="text" className='ps-3 w-[100%] text-[#a1a1a3] font-weight-200 text-sm border-none outline-none' placeholder='Search' />
            </div>
            <div className="user-details flex items-center space-x-2 ">
                <Image className='rounded-lg' src={JonathanImage} width={35} height={35} alt='User'/>
                <p className='text-sm' >Jonathan</p>
            </div>
        </div>
        
    </div>
  )
}

export default Headbar