import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ContactScreen from './screens/ContactScreen'
import DetailPlanNew from './screens/DetailPlanNew'
import HomeScreen from './screens/HomeScreen'
import LoginStudent from './screens/LoginStudent'
import LoginTeacher from './screens/LoginTeacher'
import LookupInfoScreen from './screens/LookupInfoScreen'
import Notification from './screens/Notification'
import Regulations from './screens/Regulations'
import ServiceScreen from './screens/ServiceScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/loginStudent' element={<LoginStudent />} />
        <Route path='/loginTeacher' element={<LoginTeacher />} />
        <Route path='/displayThongbao' element ={<Notification />} />
        <Route path='/displayQuydinh' element ={<Regulations />} />
        <Route path='/displayThongbao/:id' element={<DetailPlanNew />} />
        <Route path='/displayKehoach/:id' element={<DetailPlanNew />} />
        <Route path='/displayTintuc/:id' element={<DetailPlanNew />} />
        <Route path='/displayTracuu/*' element={<LookupInfoScreen/>} />
        <Route path='/displayLienhe' element={<ContactScreen />} />
        <Route path='/displayDichvu' element={<ServiceScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
