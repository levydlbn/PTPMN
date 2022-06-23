import React from 'react'
import { Link } from 'react-router-dom'

import '../static/css/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar_container'>
        <div className='navbar_content'>
           <div className='navbar_content_item'>
             <Link to='/displayThongbao'>THÔNG BÁO</Link>
           </div>
           <div className='navbar_content_item'>
             <Link to='/displayQuydinh'>QUY ĐỊNH</Link>
           </div>
           <div className='navbar_content_item'>
             <Link to='/tracuu'>TRA CỨU</Link>
           </div>
           <div className='navbar_content_item'>
             <Link to='/dichvu'>DỊCH VỤ</Link>
           </div>
           <div className='navbar_content_item'>
             <Link to='/lienhe'>LIÊN HỆ</Link>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar