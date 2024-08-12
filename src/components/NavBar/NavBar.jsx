import React from 'react'
import logo from '../../assets/light_logo.png'
import fblogo from '../../assets/facebook-logo.svg'
import instalogo from '../../assets/insta-logo.svg'
import greaterthan from '../../assets/greater-than.svg'
import { FiChevronRight } from "react-icons/fi";
import { NavLink } from 'react-router-dom'

function NavBar() {

  const navList = [
    {
    text:"corporate",
    page:"/corporate"
},{
  text:"philosophy",
  page:"/philosophy"
},{
  text:"restaurant",
  page:"/restaurant"
},{
  text:"wedding&party",
  page:"/wedding"
},{
  text:"recruit",
  page:"/recruit"
},{
  text:"magazine",
  page:"/magazine"
},{
  text:"news",
  page:"/news"
},


]

  return (
    <div className='text-white bg-black h-28 flex gap-5 justify-between uppercase  px-3 py-2 items-center opacity-80 sticky z-[20] top-0 '>
      <img src={logo} alt="logo" className='h-auto' />
      <ul className='flex gap-x-4 items-center text-xs font-semibold  tracking-widest '>

      {navList.map((item) => (
        <li className=' hover:text-gray-500 hover:opacity-90 cursor-pointer duration-200 ' key={item.text}><NavLink to={item.page}  >{item.text}</NavLink></li>
      ))}

<li><img src={fblogo} alt="" className='max-w-6 ' /></li>
        <li><img src={instalogo} alt="" /></li>

        {/* <li className=' hover:text-gray-500 hover:opacity-90 cursor-pointer duration-200'>corporate</li>
        <li>philosophy</li>
        <li>restaurant</li>
        <li>wedding&party</li>
        <li>recruit</li>
        <li>magazine</li>
        <li>news</li>
        <li><img src={fblogo} alt="" className='max-w-6' /></li>
        <li><img src={instalogo} alt="" /></li> */}
      </ul>

      <div className='flex'>
        <button className='flex items-center  border-solid border-2 px-4 py-2  mr-2 capitalize
         text-xs tracking-wider'><FiChevronRight/>reservation</button>
        <button className=' flex items-center border-solid border-2 px-4 py-1 mr-2 capitalize
         text-xs tracking-wider'><FiChevronRight/>japanese</button>
        <button className='flex items-center border-solid border-2 px-4 py-1 capitalize
         text-xs tracking-wider'><FiChevronRight/>online shop</button>
      </div>
    </div>
  )
}

export default NavBar