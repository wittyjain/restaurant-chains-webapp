import React from 'react'
import logo from '../../assets/light_logo.png'
import fblogo from '../../assets/facebook-logo.svg'
import instalogo from '../../assets/insta-logo.svg'
import { FiChevronRight } from "react-icons/fi";
import { NavLink } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";



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
    <div className='text-white  md:h-28 md:flex gap-5 justify-between uppercase  px-3 py-2 items-center md:opacity-80 sticky z-[20] top-0'>
      <ul className='flex justify-between my-4 mx-2 items-center'>
        <li><img src={logo} alt="logo" className='md:h-auto md:max-w-xl h-6 ' /></li>
        <ul className='md:hidden'>
        
        <li><GiHamburgerMenu className='size-6 cursor-pointer md:hidden'/></li>
        
      </ul>
      </ul>
      
      
      <ul className='md:flex md:gap-x-4 items-center md:text-xs font-semibold  tracking-widest  flex-row text-sm'>

      {navList.map((item) => (
        <li className=' hover:text-gray-500 hover:opacity-90 cursor-pointer duration-200 mb-8 md:mb-0 border-b-2 md:border-none pb-2 md:pb-0' key={item.text}><NavLink to={item.page}  >{item.text}</NavLink></li>
      ))}

<ul className='flex md:gap-3 justify-center md:pb-0 md:border-none border-b-2 pb-8'>
<li><img src={fblogo} alt="" className='md:max-w-6 w-12 ' /></li>
        <li><img src={instalogo} alt="" className='md:w-6 w-12' /></li>
</ul>

<button className='uppercase font-bold md:hidden flex items-center gap-1  mx-auto mt-6'><RxCross1 className='text-white '/>close</button>


      

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

      <div className='md:flex hidden'>
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