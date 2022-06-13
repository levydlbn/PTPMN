import React from 'react'

import '../../static/css/homecomponent.css'

const HomeContent = () => {
  return (
    <div className='homebody'>
      <div className='homebody_container'>
          <div className='homebody_navbar'>
            <div className='homebody_navbar_item'>Tổng hợp</div>
          </div>
          <div className='homebody_content'>
            <div className='homebody_content_container'>
              <div className='homebody_content_plan'>
                <div className='homebody_plan_title'>KẾ HOẠCH</div>
                <div className='homebody_plan_content'>plan content</div>
              </div>
              <div className='homebody_content_news'>
                <div className='homebody_news_title'>TIN TỨC</div>
                <div className='homebody_news_content'>new content</div>
              </div>
            </div>
          </div>
      </div>
    </div> 
  )
}

export default HomeContent