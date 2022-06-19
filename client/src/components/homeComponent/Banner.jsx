import React from 'react'

// import imageBanner1 from '../../static/image/13.jpg'
import imageBanner2 from '../../static/image/images654821_NH_NGO_I_KH_A_1.jpg'
import imageBanner1 from '../../static/image/gdvn_thcslacvien1.jpg'
import { useState } from 'react'

const Banner = () => {

  const img = [imageBanner1, imageBanner2]
  
  const [imgBanner, setImgBanner] = useState(img[0])
  // setInterval(() => {
  //    setImgBanner(imgBanner === img[0] ? img[1] : img[0])
  // }, 5000)

  return (
    <div style={{display: 'flex', justifyContent: 'center',}} className='banner'>
        <div style={{ width: 1200, height: 400}}  className='banner_container'>
            <div style={{ height: '100%', width: '100%' }} className='banner_content'>
                <img src={imgBanner} style={{height: '100%', width: '100%'}} alt='sdfsdfds' />
            </div>
        </div>
    </div>
  )
}

export default Banner