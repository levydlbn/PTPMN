import React from 'react'

// import imageBanner1 from '../../static/image/13.jpg'
import imageBanner1 from '../../static/image/gdvn_thcslacvien1.jpg'

const Banner = () => {

  

  return (
    <div style={{display: 'flex', justifyContent: 'center',}} className='banner'>
        <div style={{ width: 1200, height: 400}}  className='banner_container'>
            <div style={{ height: '100%', width: '100%' }} className='banner_content'>
                <img src={imageBanner1} style={{height: '100%', width: '100%'}} alt='sdfsdfds' />
            </div>
        </div>
    </div>
  )
}

export default Banner