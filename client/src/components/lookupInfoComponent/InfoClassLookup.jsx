import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { detailClass, detaiSchoolYear } from '../../redux/actions/AdminAction'
import { addStudent, listStudentInClass } from '../../redux/actions/StudentActions'
import { detailTeacher } from '../../redux/actions/TeacherAction'

import '../../static/css/infoClassLookup.css'

const InfoClassLookup = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const listStudent_inclass = useSelector(state => state.listStudentInClass)
    const detailclass = useSelector(state => state.detailClassInYear)
    const detailteacher = useSelector(state => state.detailTeacher)
    const detailschoolyear = useSelector(state => state.detailSchoolYear)
    const {detailClass_inyear} = detailclass
    const {classStudents} = listStudent_inclass
    const {teacher} = detailteacher
    const {schoolYear} = detailschoolyear

    const idTeacher = detailClass_inyear.GVCN
    const idSchoolYear = detailClass_inyear.NAMHOC

   const [HOHS, SETHOHS] = useState("")
   const [TENHS, SETTENHS] = useState("")
   const [TENDNHS, SETTENDNHS] = useState("")
   const [PASSWORDHS, SETPASSWORDHS] = useState("")
   const [GIOITINH, SETGIOITINH] = useState("")
   const [NGAYSINH, SETNGAYSINH] = useState("")

    const [statusAddSt, setStatusAddSt] = useState(false)

    const handleStatusAddSt = () => {
        setStatusAddSt(statusAddSt?false:true)
    }

    const handleAddStudent = () => {
    const newStudent = {
        MALOP: detailClass_inyear._id,
        HOHS: HOHS,
        TENHS: TENHS,
        TENDN: TENDNHS,
        PASSWORD: PASSWORDHS,
        GIOITINH: GIOITINH,
        NGAYSINH: NGAYSINH,
    }
    dispatch(addStudent(newStudent))
    setStatusAddSt(false)
   }

    console.log(classStudents, detailClass_inyear, teacher, schoolYear)

    useEffect(() => {
        dispatch(detailClass(id))
        dispatch(listStudentInClass(id))
        dispatch(detailTeacher(idTeacher))
        dispatch(detaiSchoolYear(idSchoolYear)) 
    }, [id, dispatch, idTeacher, idSchoolYear, statusAddSt,])

  return (
    <div className='info_class'>
        <div className='info_class_container'>
            <div className='info_class_content'>
                <div className='info_class_title'>
                    TH??NG TIN L???P H???C
                </div>
                <div className='info_class_body'>
                   <div  className='info_class_teacher'>
                    {teacher && schoolYear? <div>
                       <p>
                          Gi??o vi??n ch??? nhi??m: {teacher.HOGV} {teacher.TENGV}
                       </p>
                       <p>Ph??ng H???c: {detailClass_inyear.PHONGHOC}</p>
                       <p>N??m H???c: {schoolYear.THOIGIAN}</p>
                    </div> : <div>Ch??a c?? th??ng tin l???p h???c</div>}
                   </div>
                    <div className='info_class_student'>
                        <div className='info_class_student_top'>
                              <div className='info_class_student_title'>DANH S??CH H???C SINH</div>
                            <div className='search_student'>
                                <input className='search_student_input'/>
                                <button className='search_student_btn'>T??m ki???m</button>
                            </div>
                            <button className='info_class_student_btn' onClick={handleStatusAddSt}>Th??m h???c sinh</button>
                        </div>
                            {statusAddSt ? 
                            <div className='add_student_form'>
                                <p className='add_student_form_title'>??i???n ?????y ????? th??ng tin</p>
                                <input className='add_student_input' type='text' placeholder='HOHS' onChange={(e) => SETHOHS(e.target.value)}/>
                                <input className='add_student_input' type='text' placeholder='TENHS' onChange={(e) => SETTENHS(e.target.value)}/>
                                <input className='add_student_input' type='text' placeholder='TENDNHS' onChange={(e) => SETTENDNHS(e.target.value)}/>
                                <input className='add_student_input' type='password' placeholder='PASSWORDHS' onChange={(e) => SETPASSWORDHS(e.target.value)}/>
                                <input className='add_student_input' type='text' placeholder='GIOITINH' onChange={(e) => SETGIOITINH(e.target.value)}/>
                                <input className='add_student_input' type='text' placeholder='NGAYSINH' onChange={(e) => SETNGAYSINH(e.target.value)}/>
                                <button className='add_student_btn' onClick={ handleAddStudent} >Th??m HS</button>
                             </div>
                          :
                            <>
                            </>}
                        <div className='info_class_student_list'>
                          <div className='info_class_student_cot'>
                            <span>L???p h???c</span>
                            <span>H??? HS</span>
                            <span>T??n HS</span>
                            <span>Gi???i T??nh</span>
                            <span>Ng??y sinh</span>
                          </div>
                          <div className='info_class_student_table'>
                          {classStudents.map(item => (
                            <div>
                              <Link to={`/displayTracuu/student/${item._id}`} style={{color: 'black'}}>
                              <div className='info_class_student_item'>
                                <span>{detailClass_inyear.PHONGHOC}</span>
                                <span>{item.HOHS}</span>
                                <span>{item.TENHS}</span>
                                <span>{item.GIOITINH}</span>
                                <span>{item.NGAYSINH}</span>
                              </div>
                              </Link>
                            </div>
                          ))}
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoClassLookup