import React from 'react'

import imageSchool from '../static/image/school-icon-png-5.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div style={{width: '100%', height: 300, backgroundColor: '#3b1ec9', display: 'flex', justifyContent: 'center'}} className='footer_container'>
        <div className='footer_content' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{textAlign: 'center', color: 'white'}} className='footer_title'>
            <h3>TRƯỜNG TRUNG HỌC CƠ SỞ HÀM CƯỜNG</h3>
            <h4>Địa chỉ: Xã Hàm Cường, Huyện Hàm Thuận Nam, Bình thuận</h4>
          </div>
          <img src={imageSchool} style={{width: 260, color: 'white'}} alt='sdfsdf' />
        </div>
      </div>
    </div>
  )
}

export default Footer