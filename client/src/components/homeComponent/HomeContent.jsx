import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPlanNew } from '../../redux/actions/PlanNewActions'
import {Link} from 'react-router-dom'

import '../../static/css/homecomponent.css'
import Loading from '../Loading'

const HomeContent = () => {

  const dispatch = useDispatch()

  const planNewList = useSelector(state => state.planNewList)
  
  const {loading, error, plannews} = planNewList

  const planList = plannews.filter(item => item.TYPE === "kehoach")
  const newList = plannews.filter(item => item.TYPE === "tintuc")
  
  console.log(plannews, loading, error, planList)
  useEffect(() => {
    dispatch(listPlanNew())
  }, [dispatch])


  return (
    <div className='homebody'>
      <div className='homebody_container'>
          <div className='homebody_navbar'>
            <div className='homebody_navbar_item'>Tổng hợp</div>
          </div>
          {loading === true ?
           <Loading /> :
          <div className='homebody_content'>
            <div className='homebody_content_container'>
              <div className='homebody_content_plan'>
                <div className='homebody_plan_title'>KẾ HOẠCH</div>
                <div className='homebody_plan_content'>
                  {planList.map(item => <div className='plan_item'>
                    <div className='plan_item_time'>{item.THOIGIAN}</div>
                    <Link to={`/displayKehoach/${item._id}`}>
                    <div className='plan_item_title'>
                      <h4>{item.TIEUDE}</h4>
                      <span>{item.THOIGIAN}</span>
                    </div>
                    </Link>
                  </div>)}
                </div>
              </div>
              <div className='homebody_content_news'>
                <div className='homebody_news_title'>TIN TỨC</div>
                <div className='homebody_news_content'>
                {newList.map(item => <div className='plan_item'>
                    <div className='plan_item_time'>{item.THOIGIAN}</div>
                    <Link to={`displayTintuc/${item._id}`}>
                      <div className='plan_item_title'>
                        <h4>{item.TIEUDE}</h4>
                        <span>{item.THOIGIAN}</span>
                      </div>
                    </Link>
                  </div>)}
                </div>
              </div>
            </div>
          </div>
          }
      </div>
    </div> 
  )
}

export default HomeContent