import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banner from '../components/homeComponent/Banner'
import HomeContent from '../components/homeComponent/HomeContent'
import IconTelephone from '../components/IconTelephone'
import Navbar from '../components/Navbar'

const HomeScreen = () => {

  // const navigate = useNavigate()

  // const userStudent = useSelector(state => state.studentLogin)

  // const {loading, error, user} = userStudent

  // console.log(loading, error, user)

  // useEffect(() => {
  //   if(loading === true) {
  //     navigate("/loginStudent")
  //   }
  // }, [])

  return (
    <>
        <Header />
        <Navbar />
        <div style={{paddingTop: 190}} className='home_body'>
          <Banner/>
          <HomeContent/>
        </div>
        <IconTelephone />
        <Footer />
    </>
  )
}

export default HomeScreen