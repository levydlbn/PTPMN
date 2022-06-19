import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DetailPlanNew from './screens/DetailPlanNew'
import HomeScreen from './screens/HomeScreen'
import Login from './screens/Login'
import Notification from './screens/Notification'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/displayThongbao' element ={<Notification />} />
        <Route path='/displayThongbao/:id' element={<DetailPlanNew />} />
        <Route path='/displayKehoach/:id' element={<DetailPlanNew />} />
        <Route path='/displayTintuc/:id' element={<DetailPlanNew />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
