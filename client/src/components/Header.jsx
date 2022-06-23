import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import '../static/css/header.css'

import logoSchool from '../static/image/LOGO_HAM_CUONG2.jpg.jpg'
import searchIcon from '../static/image/searchIcon.png'

const Header = () => {

  const [searchInput, setSearchInput] = useState("")

  console.log(searchInput)

  return (
    <div className='header'>
      <div className='header_container'>
        <div className='header_content'>
          <Link to='/'>
            <div className='header_content_logo'>
              <img src={logoSchool} style={{width: 100, height: 100, marginRight: 20, borderRadius: '50%'}} className='header_logoSchool' alt='sdfsdf' />
              <div>
                <h3>TRƯỜNG TRUNG HỌC CƠ SỞ HÀM CƯỜNG</h3>
                <h2>CỔNG THÔNG TIN SINH VIÊN</h2>
              </div>
            </div>
          </Link>
          <div className='header_content_search'>
            <input className='header_search_input' placeholder='Tìm kiếm' onChange={(e) => setSearchInput(e.target.value)}/>
            <button className='header_search_btn'>
              <img src={searchIcon} style={{width: 20, height: 20}} className='header_seachIcon' alt='asdfsdf'/>
            </button>
          </div>
          <div className='header_content_account'>
            <Link to='/login'>
              <button className='header_login_btn'>ĐĂNG NHẬP</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header