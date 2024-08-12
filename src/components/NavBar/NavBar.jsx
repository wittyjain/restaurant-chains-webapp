import React from 'react'
import logo from '../../assets/light_logo.png'
import fblogo from '../../assets/facebook-logo.svg'
import instalogo from '../../assets/insta-logo.svg'
import greaterthan from '../../assets/greater-than.svg'

function NavBar() {
  return (
    <div className='text-white bg-black h-28 flex justify-between uppercase  px-3 py-2 items-center opacity-80 sticky z-[20] top-0 '>
      <img src={logo} alt="logo" className='h-auto' />
      <ul className='flex gap-x-4 text-xs font-semibold  tracking-widest'>
        <li className=' hover:text-gray-500 hover:opacity-90 cursor-pointer duration-200'>corporate</li>
        <li>philosophy</li>
        <li>restaurant</li>
        <li>wedding&party</li>
        <li>recruit</li>
        <li>magazine</li>
        <li>news</li>
        <li><img src={fblogo} alt="" className='max-w-6' /></li>
        <li><img src={instalogo} alt="" /></li>
      </ul>

      <div>
        <button className='border-solid border-2 px-4 py-1 mr-2 capitalize
         text-xs tracking-wider'>reservation</button>
        <button className='border-solid border-2 px-4 py-1 mr-2 capitalize
         text-xs tracking-wider'>japanese</button>
        <button className='border-solid border-2 px-4 py-1 capitalize
         text-xs tracking-wider'>online shop</button>
      </div>
    </div>
  )
}

export default NavBar