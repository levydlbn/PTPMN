import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from '../redux/actions/StudentActions'

const Regulations = () => {
   
   const [MALOP, SETMALOP] = useState("")
   const [HOHS, SETHOHS] = useState("")
   const [TENHS, SETTENHS] = useState("")
   const [TENDN, SETTENDN] = useState("")
   const [PASSWORD, SETPASSWORD] = useState("")
   const [GIOITINH, SETGIOITINH] = useState("")
   const [NGAYSINH, SETNGAYSINH] = useState("")
 
   
   const dispatch = useDispatch()

   const addStudents = useSelector(state => state.addStudent)
   const {loading, error, success} = addStudents
   console.log(loading, error, success)

   const handleAddStudent = (e) => {
    e.preventDefault()
    const newStudent = {
        MALOP: MALOP,
        HOHS: HOHS,
        TENHS: TENHS,
        TENDN: TENDN,
        PASSWORD: PASSWORD,
        GIOITINH: GIOITINH,
        NGAYSINH: NGAYSINH,
    }
    dispatch(addStudent(newStudent))
   }


  return (
    <div className="regulations">
        <div className="regulation_container">
            <div className="regulation_content">
                <input type='text' placeholder='MALOP' onChange={(e) => SETMALOP(e.target.value)}/>
                <input type='text' placeholder='HOHS' onChange={(e) => SETHOHS(e.target.value)}/>
                <input type='text' placeholder='TENHS' onChange={(e) => SETTENHS(e.target.value)}/>
                <input type='text' placeholder='TENDN' onChange={(e) => SETTENDN(e.target.value)}/>
                <input type='text' placeholder='PASSWORD' onChange={(e) => SETPASSWORD(e.target.value)}/>
                <input type='text' placeholder='GIOITINH' onChange={(e) => SETGIOITINH(e.target.value)}/>
                <input type='text' placeholder='NGAYSINH' onChange={(e) => SETNGAYSINH(e.target.value)}/>
                <button onClick={ handleAddStudent} >addStudent</button>
            </div>
        </div>
    </div>
  )
}

export default Regulations