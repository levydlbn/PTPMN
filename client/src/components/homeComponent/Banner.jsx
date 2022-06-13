import React from 'react'

// import imageBanner1 from '../../static/image/13.jpg'
import imageBanner2 from '../../static/image/images654821_NH_NGO_I_KH_A_1.jpg'

const Banner = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center',}} className='banner'>
        <div style={{ width: 1200, height: 400}}  className='banner_container'>
            <div style={{ height: '100%', width: '100%' }} className='banner_content'>
                <img src={imageBanner2} style={{height: '100%', width: '100%'}} alt='sdfsdfds' />
            </div>
        </div>
    </div>
  )
}

export default Banner