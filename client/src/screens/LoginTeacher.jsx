import React from 'react'

import logoSchool from '../static/image/LOGO_HAM_CUONG2.jpg.jpg'

import '../static/css/login.css'
import Footer from '../components/Footer'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginTeacher } from '../redux/actions/AuthAction'


const LoginTeacher = () => {

//test vo van

const [userTc, setUserTc] = useState("")
const [password, setPassword] = useState("") 

const dispatch = useDispatch()
const navigate = useNavigate()



const handleLoginTeacher = (e) => {
  e.preventDefault()
  const newUser = {
    TENDN: userTc,
    PASSWORD: password,
  }
  dispatch(loginTeacher(newUser, navigate))
}


  return (
    <div className="login">
      <div className="login_container">
        <div className="login_content">
          <div className="login_header">
            <div className="login_header_container">
              <Link to={"/"}>
              <div className="login_header_logo">
               <img src={logoSchool} alt='sdfsdf' style={{height: 50, width: 50, borderRadius: '50%', marginRight: 10}}/>
               <span style={{fontSize: 24, color: 'blue'}}>THCS Hàm Cường</span>
              </div>
              </Link>
              <div style={{fontSize: 28, color: 'black'}} className="login_header_title">Đăng Nhập</div>
            </div>
          </div>
          <div className="login_body">
            <div className="login_body_logo">
              <img src={logoSchool} alt='sdfsdf' style={{borderRadius: '50%', height: 220}} />
              <span style={{fontSize: 26, color: 'black', margin: 10}}>THCS Hàm Cường</span>
              <p style={{margin: 0, fontSize: 24, color: 'black'}}>Học không chơi đánh rơi tuổi trẻ,</p>
              <p style={{margin: 0, fontSize: 24, color: 'black'}}>Chơi không học bán rẻ tương lai</p>
            </div>
            <div className="login_body_form">
              <div className="login_body_form_container">
                <div className="login_body_form_title">Đăng Nhập / Giáo viên</div>
                  <input className='login_input' placeholder='username' onChange={(e) => setUserTc(e.target.value)} />
                  <input type='password' className='login_input' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                  <button className='login_btn' onClick={handleLoginTeacher}>Đăng Nhập</button>
                  <Link to={"/loginStudent"} style={{color: 'blue', fontSize: 14, textAlign: 'end'}}>Đăng nhập / Học sinh</Link>
                </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default LoginTeacher