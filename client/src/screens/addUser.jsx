import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addStudent } from '../redux/actions/StudentActions'
import { addTeacher } from '../redux/actions/TeacherAction'

const Regulations = () => {
   
   const [MALOP, SETMALOP] = useState("")
   const [HOHS, SETHOHS] = useState("")
   const [TENHS, SETTENHS] = useState("")
   const [TENDNHS, SETTENDNHS] = useState("")
   const [PASSWORDHS, SETPASSWORDHS] = useState("")
   const [GIOITINH, SETGIOITINH] = useState("")
   const [NGAYSINH, SETNGAYSINH] = useState("")

   const [HOGV, SETHOGV] = useState("")
   const [TENGV, SETTENGV] = useState("")
   const [TENDNGV, SETTENDNGV] = useState("")
   const [PASSWORDGV, SETPASSWORDGV] = useState("")
   
 
   
   const dispatch = useDispatch()

//    const addStudents = useSelector(state => state.studentAdd)
   const addTeachers = useSelector(state => state.teacherAdd)
//    const {loading, error, success} = addStudents
   const {loading, error, success} = addTeachers
   console.log(loading, error, success)

   const handleAddStudent = (e) => {
    e.preventDefault()
    const newStudent = {
        MALOP: MALOP,
        HOHS: HOHS,
        TENHS: TENHS,
        TENDN: TENDNHS,
        PASSWORD: PASSWORDHS,
        GIOITINH: GIOITINH,
        NGAYSINH: NGAYSINH,
    }
    dispatch(addStudent(newStudent))
   }

   const handleAddTeacher = (e) => {
    e.preventDefault()
    const newTeacher = {
        HOGV: HOGV,
        TENGV: TENGV,
        TENDN: TENDNGV,
        PASSWORD: PASSWORDGV
    }
    dispatch(addTeacher(newTeacher))
   }


  return (
    <div className="regulations">
        <div className="regulation_container">
            <div className="regulation_content">
                <input type='text' placeholder='MALOP' onChange={(e) => SETMALOP(e.target.value)}/>
                <input type='text' placeholder='HOHS' onChange={(e) => SETHOHS(e.target.value)}/>
                <input type='text' placeholder='TENHS' onChange={(e) => SETTENHS(e.target.value)}/>
                <input type='text' placeholder='TENDNHS' onChange={(e) => SETTENDNHS(e.target.value)}/>
                <input type='password' placeholder='PASSWORDHS' onChange={(e) => SETPASSWORDHS(e.target.value)}/>
                <input type='text' placeholder='GIOITINH' onChange={(e) => SETGIOITINH(e.target.value)}/>
                <input type='text' placeholder='NGAYSINH' onChange={(e) => SETNGAYSINH(e.target.value)}/>
                <button onClick={ handleAddStudent} >addStudent</button>
            </div>
            <div className="regulation_content">
                <input type='text' placeholder='HOGV' onChange={(e) => SETHOGV(e.target.value)}/>
                <input type='text' placeholder='TENGV' onChange={(e) => SETTENGV(e.target.value)}/>
                <input type='text' placeholder='TENDNGV' onChange={(e) => SETTENDNGV(e.target.value)}/>
                <input type='password' placeholder='PASSWORDGV' onChange={(e) => SETPASSWORDGV(e.target.value)}/>
                <button onClick={ handleAddTeacher} >addTeacher</button>
            </div>
        </div>
    </div>
  )
}

export default Regulations