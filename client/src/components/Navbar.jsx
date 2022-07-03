import React from 'react'
import { Link } from 'react-router-dom'

import '../static/css/navbar.css'

const Navbar = () => {

  
  const navItem = [
    {
      title: "THÔNG BÁO",
      type: "Thongbao",
    }, {
      title: "QUY ĐỊNH",
      type: "Quydinh",
    }, {
      title: "TRA CỨU",
      type: "Tracuu",
    }, {
      title: "DỊCH VỤ",
      type: "Dichvu",
    }, {
      title: "LIÊN HỆ",
      type: "Lienhe",
    },
  ]

  return (
    <div className='navbar'>
      <div className='navbar_container'>
        <div className='navbar_content'>
          {navItem.map(item => (
            <div key={item.title} className='navbar_content_item'>
             <Link to={`/display${item.type}`}>{item.title}</Link>
           </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar