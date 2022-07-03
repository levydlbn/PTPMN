import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'

import Header from '../components/Header'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import { listPlanNewDetails } from '../redux/actions/PlanNewActions'

import '../static/css/detailPlanNew.css'

const DetailPlanNew = () => {

  const {id} = useParams()
  console.log(id)
  const dispatch = useDispatch()

  const planNewDetails = useSelector(state => state.planNewDetails)
  
  const {loading, plannew} = planNewDetails


 
  
  useEffect(() => {
    dispatch(listPlanNewDetails(id))
  }, [id,dispatch])

  return (
    <div>
      <Header />
      <Navbar />
      {loading === true
       ? <div style={{paddingTop: 200}}>
           <Loading />
       </div>  :
      <div style={{paddingTop: 190}} className='DetailPlanNew_container'>
        <div className='DetailPlanNew_content'>
          <h2>{plannew.TIEUDE}</h2>
          <p>{plannew.NOIDUNG}</p>
          <p>{plannew.THOIGIAN}</p>
        </div>
      </div>
      }
      <Footer />
    </div>
  )
}


export default DetailPlanNew