import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPlanNew } from '../redux/actions/PlanNewActions'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'
import IconTelephone from '../components/IconTelephone'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Regulations = () => {

    const dispatch = useDispatch()

  const planNewList = useSelector(state => state.planNewList)
  
  const {loading, plannews} = planNewList

  useEffect(() => {
    dispatch(listPlanNew())
  }, [dispatch])

    const [pageNumber, setPageNumber] = useState(0)

const plannewPerPage = 5
const pagesVisited = pageNumber * plannewPerPage

const displayPlannew =  plannews.slice(pagesVisited, pagesVisited + plannewPerPage).map(item => (
  <div key={item._id} className="thongbao_item" style={{width: 1000, backgroundColor: '#ddd',
   padding: 16, margin: 12, borderRadius: 4}}>
    <div>
     <Link to={`/displayThongbao/${item._id}`} style={{color: '#222'}}>
      <div className="thongbao_item_title" >
          <h3 style={{marginBottom: 16, marginTop: 0}}>{item.TIEUDE}</h3>
     </div>
     </Link>      
    </div>
      <span>{item.THOIGIAN}</span>
 </div>
))



const pageCount = Math.ceil(plannews.length / plannewPerPage)

  const changePage = ({ selected }) => {
      setPageNumber(selected)
  }

return (
  <div>
      <Header />
      <Navbar />
      {loading === true 
      ? <div style={{paddingTop: 200}}>
           <Loading /> 
        </div>
     :  <div className="thongbao_container" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <div style={{maxWidth: 1200, margin: 'auto', padding: '20px 40px'}} className="thongbao_content">
              <h2 style={{marginTop: 0, marginBottom: 26, paddingTop: 200, paddingBottom: 20,
               textAlign: 'start', borderBottom: '2px solid #444', color: '#666'}}>DANH SÁCH QUY ĐỊNH - QUY CHẾ</h2>
              <div className="thongbao_list">
                 {displayPlannew}    
              </div>
          </div>
          <ReactPaginate
          previousLabel = { "< Trước" }
          nextLabel = { "Sau >" }
          pageCount = { pageCount }
          onPageChange = { changePage }
          containerClassName = { "paginationBttns" }
          previousLinkClassName = { "previousBttn" }
          nextLinkClassName = { "nextBttn" }
          disabledClassName = { "paginationDisabled" }
          activeClassName = { "paginationActive" }
          />
      </div>
      }
      <IconTelephone />
      <Footer />
  </div>
)
}

export default Regulations