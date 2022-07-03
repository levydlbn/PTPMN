import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { logoutStudent, logoutTeacher } from '../redux/actions/AuthAction'

import '../static/css/header.css'

import logoSchool from '../static/image/LOGO_HAM_CUONG2.jpg.jpg'
import searchIcon from '../static/image/searchIcon.png'
import userIcon from '../static/image/822711_user_512x512.png'
import { useEffect } from 'react'

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userStudent = useSelector(state => state.studentLogin)
  const userTeacher = useSelector(state => state.teacherLogin)
  const {loading, error, user} = userStudent
  const {teacher} = userTeacher
  console.log(teacher)
  
  console.log(loading, error, userStudent)
  const id = (user === null ? teacher?._id : user._id)
  const accessToken = (user === null ? teacher?.accessToken : user.accessToken)
 
  // useEffect(()=> {
  //   setCurrentUser(user)
  // }, [])
 

  const handleLogoutStudent = () => {
    dispatch(logoutStudent(navigate,id, accessToken))
  }

  const handleLogoutTeacher = () => {
    dispatch(logoutTeacher(navigate, id, accessToken))
  }

 useEffect(() => {
  if(!user && !teacher) {
    navigate("/loginStudent")
  }
 },)

 

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
            <input className='header_search_input' placeholder='Tìm kiếm'/>
            <button className='header_search_btn'>
              <img src={searchIcon} style={{width: 20, height: 20}} className='header_seachIcon' alt='asdfsdf'/>
            </button>
          </div>
          
          {user?.USERTYPE === "student"
          ? <div style={{display: 'flex', marginLeft: 40, alignItems: 'center'}}>
              <p style={{color: 'white'}}>Hi! </p>
              <img src={userIcon} style={{height: 30, borderRadius: '50%', margin: '0 5px'}} alt="sdfsdfsdf"/>
              <p style={{color: 'white'}}>{user.TENHS}</p>
              <button style={{height: 36, border: 'none', borderRadius: 2, marginLeft: 10, backgroundColor: '#84bff7', cursor: 'pointer' }} onClick={handleLogoutStudent}>Đăng xuất</button>
          </div>
          : <>
          {teacher?.USERTYPE === "teacher"
             ?<div style={{display: 'flex', marginLeft: 40, alignItems: 'center'}}>
                <p style={{color: 'white'}}>Giáo Viên! </p>
                <img src={userIcon} style={{height: 30, borderRadius: '50%', margin: '0 5px'}} alt="sdfsdfsdf"/>
                <p style={{color: 'white'}}>{teacher.TENGV}</p>
                <button style={{height: 36, border: 'none', borderRadius: 2, marginLeft: 10, backgroundColor: '#84bff7', cursor: 'pointer' }} onClick={handleLogoutTeacher}>Đăng xuất</button>
             </div>
             :<div className='header_content_account'>
              <Link to='/loginStudent'>
                <button className='header_login_btn'>ĐĂNG NHẬP</button>
              </Link>
              <Link to='/loginTeacher'>
                 <button className='header_login_btn'>Dành cho Giáo viên</button>
              </Link>
            </div>
           }
          </>
          
          }
          </div>
        </div>
      </div>
  )
}

export default Header