import React from 'react'
import menu_icon from '../Asset/menu.png'
import logo from '../Asset/logo.png'
import search_icon from '../Asset/search.png'
import upload_icon from '../Asset/upload.png'
import more_icon from '../Asset/more.png'
import notifications_icon from '../Asset/notification.png'
import profile_icon from '../Asset/jack.png'

const Navbar = ({setSidebar}) => {
  return (
    <div>
      <nav className='flex-div'>
 <div className='nav-left flex-div'>
 <img className='menu-icon' onClick={() => setSidebar(prev => !prev)} src={menu_icon} alt='' />
        <img className='logo' src={logo} alt='' />
</div>
<div className='nav-middle flex-div'>
    <div className='search-box flex-div'>
    <input type='text' placeholder='Search'/>
    <img className='search-icon' src={search_icon} alt='' />
    </div>
</div>

<div className='nav-right flex-div'>
    <img className='' src={upload_icon} alt='' />
    <img className='' src={more_icon} alt='' />
    <img className='' src={notifications_icon} alt='' />
    <img className='user-icon' src={profile_icon} alt='' />

</div>
      </nav>
    </div>
  )
}

export default Navbar
