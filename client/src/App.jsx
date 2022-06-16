import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DetailPlanNew from './screens/DetailPlanNew'
import HomeScreen from './screens/HomeScreen'
import Login from './screens/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/displayKehoach/:TIEUDE' element={<DetailPlanNew />} />
        <Route path='/displayTintuc/:TIEUDE' element={<DetailPlanNew />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
