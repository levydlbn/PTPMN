import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

import '../static/css/notification.css'
import { Link } from 'react-router-dom'

const Notification = () => {

   const dispatch = useDispatch()

  const planNewList = useSelector(state => state.planNewList)
  
  const {loading, error, plannews} = planNewList

  const [pageNumber, setPageNumber] = useState(0)

  const plannewPerPage = 5
  const pagesVisited = pageNumber * plannewPerPage

  const displayPlannew =  plannews.slice(pagesVisited, pagesVisited + plannewPerPage).map(item => (
    <div className="thongbao_item" style={{width: 1000, backgroundColor: '#ddd',
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
        <div className="thongbao_container" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <div style={{maxWidth: 1200, margin: 'auto', padding: '20px 40px'}} className="thongbao_content">
                <h2 style={{marginTop: 0, marginBottom: 26, paddingTop: 200, paddingBottom: 20,
                 textAlign: 'center', borderBottom: '2px solid #444', color: 'blue'}}>THÔNG BÁO</h2>
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
        <Footer />
    </div>
  )
}

export default Notification