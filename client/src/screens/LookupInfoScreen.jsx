import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { lisSchoolYear, listClassInYear } from '../redux/actions/AdminAction'



import '../static/css/lookupInfo.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import HomeLookup from '../components/lookupInfoComponent/HomeLookup'
import InfoClassLookup from '../components/lookupInfoComponent/InfoClassLookup'
import { useEffect } from 'react'
import InfoStudentLookup from '../components/lookupInfoComponent/InfoStudentLookup'

const LookupInfoScreen = () => {
  
  const [statusYearbtn, setStatusYearbtn] = useState(false)
  const [SchoolYear, setSchoolYear] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const listSchoolYear = useSelector(state => state.listSchoolYear)
  const listClassInYears = useSelector(state => state.listClassInYear)
  const { schoolYears} = listSchoolYear
  const {listClass} = listClassInYears


  useEffect(() => {
    dispatch(lisSchoolYear())
  },[dispatch])

  const handleShowSchoolYear = () => {
    navigate("/displayTracuu")
  }

  const handleShowClass = (id) => {
    setSchoolYear(id)
    dispatch(listClassInYear(id))
    setStatusYearbtn(statusYearbtn && id === SchoolYear?false:true)
  }

  const showClass = listClass.map(item => (
    <Link to={`/displayTracuu/${item._id}`} >
      <div className='class_item'>
        {item.PHONGHOC}
      </div>
    </Link>
  ))
  

  return (
    <>
        <Header />
        <Navbar />
        <div className='lookupinfo_container'>
          <div className='lookupinfo_content' >
            <div className='lookupinfo_content_left'>
            <button onClick={handleShowSchoolYear}
             className="showSchoolyearbtn">Năm Học </button>
              <div>
              { schoolYears.map(item => (
                <div className='lookupinfo_schoolyear'>
                  <div key={item.THOIGIAN}  onClick={() => handleShowClass(item._id)} className="schoolyear_item">
                  {item.THOIGIAN}
                  </div> 
                  <div>
                    {statusYearbtn && item._id === SchoolYear ? <div className='listclass'> {showClass } </div> : <></> }
                  </div>
                </div>
                ))}
              </div>
            </div>
            <div className='lookupinfo_content_right'>
              <Routes>
                <Route path='/' element={<HomeLookup />}/>
                <Route path='/:id' element={<InfoClassLookup />} />
                <Route path='/student/:id' element={<InfoStudentLookup />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default LookupInfoScreen