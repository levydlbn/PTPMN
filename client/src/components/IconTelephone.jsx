import React from 'react'

import TelephoneImage from '../static/image/img_286076.png'

import '../static/css/iconTelephone.css'

const IconTelephone = () => {
  return (
    <div className = "icon__telephone" >
    <div className = "icon__telephone-outside1" >
      <div className = "icon__telephone-outside2" >
        <div className = "icon__telephone-container" >
          <img src = { TelephoneImage }
              className = "icon__telephone-img" 
              alt='sfdsfdsf' />
        </div> 
      </div> 
    </div> 
     <div className = "icon__telephone-text" >
        <p> 0965 999 999 </p> 
     </div> 
  </div>
  )
}

export default IconTelephone