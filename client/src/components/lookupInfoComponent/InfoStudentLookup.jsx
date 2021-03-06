import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addScore, listStudentDetails, removeStudent, scoreStudentDetail, updateScore, updateStudent } from '../../redux/actions/StudentActions'

import '../../static/css/infoStudentLookup.css'

const InfoStudentLookup = () => {
   const {id} = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const detaistudent = useSelector(state => state.studentDetail)
   const detailteacher = useSelector(state => state.detailTeacher)
   const detailschoolyear = useSelector(state => state.detailSchoolYear)
   const detailclass = useSelector(state => state.detailClassInYear)
   const scorestudent = useSelector(state => state.studentScore)

   const {student} = detaistudent
   const {teacher} = detailteacher
   const {schoolYear} = detailschoolyear
   const {detailClass_inyear} = detailclass
   const {score} = scorestudent

   const [HohsCr, setHohsCr] = useState(student.HOHS)
   const [TenhsCr, setTenhsCr] = useState(student.TENHS)
   const [NgaysinhhsCr, setNgaysinhhsCr] = useState(student.NGAYSINH)
   const [GioitinhhsCr, setGioitinhhsCr] = useState(student.GIOITINH)

  //  const [toanCr, setToanCr] = useState("")
  //  const [VanCr, setVanCr] = useState("")
  //  const [AnhCr, setAnhCr] = useState("")
  //  const [LyCr, setLyCr] = useState("")
  //  const [HoaCr, setHoaCr] = useState("")
  //  const [SinhCr, setSinhCr] = useState("")
  //  const [SuCr, setSuCr] = useState("")
  //  const [DiaCr, setDiaCr] = useState("")
  //  const [DiaCr, setToanCr] = useState("")

   const [statusEditStudent, setStatusEditStudent] = useState(false)
   const [statusRemoveStudent, setStatusRemoveStudent] = useState(false)
   const [statusAddScore, setStatusAddScore] = useState(false)
   const [statusEditScore, setStatusEditScore] = useState(false)
   const [statusEditScoreGiua, setStatusEditScoreGiua] = useState(false)
   const [statusEditScoreCuoi, setStatusEditScoreCuoi] = useState(false)

   const [statusThongke, setStatusThongke] = useState(false)

   const [mediumScore, setmediumScore] = useState(0)

   const [HOCKY, SETHOCKY] = useState("")
   const [TOAN, SETTOAN] = useState("")
   const [VAN, SETVAN] = useState("")
   const [ANH, SETANH] = useState("")
   const [LY, SETLY] = useState("")
   const [HOA, SETHOA] = useState("")
   const [SINH, SETSINH] = useState("")
   const [SU, SETSU] = useState("")
   const [DIA, SETDIA] = useState("")
   const [GDCN, SETGDCN] = useState("")

  
   console.log(student, teacher, schoolYear, score, scorestudent)

//    const idTeacher = student.MALOP.GVCN
//    const idSchoolyear = student.MALOP.NAMHOC
   const handleRemoveStudent = (idst) => {
    dispatch(removeStudent(idst))
    alert("X??a Th??nh C??ng!")
    navigate(`/displayTracuu/${student.MALOP._id}`)
   }

   const handleStatusEditStudent = () => {
    setStatusRemoveStudent(false)
    setStatusEditStudent(statusEditStudent?false:true)
   }

   const handleStatusRemoveStudent = () => {
    setStatusEditStudent(false)
    setStatusRemoveStudent(statusRemoveStudent?false:true )
   }

   const handleStatusAddScore = () => {
    setStatusAddScore(statusAddScore?false:true)
   }

   const handleStatusEditScore = () => {
    setStatusEditScore(statusEditScore?false:true)
   }

 

   const handleExit = () => {
    setStatusEditStudent(statusEditStudent?false:true)
   }

   
   const handleExitRemove = () => {
    setStatusRemoveStudent(false)
   }

   const handleExitAddScore = () => {
    setStatusAddScore(false)
   }

   const handleAddScore = () => {
    const newScore = 
      {
        HOCKY: HOCKY,
        MAHS: student._id,
        TOAN: TOAN,
        LY: LY,
        HOA: HOA,
        SINH: SINH,
        VAN: VAN,
        ANH: ANH,
        SU: SU,
        DIA: DIA,
        GDCN: GDCN,
      }
    dispatch(addScore(newScore))
    alert("Th??m ??i???m Th??nh C??ng")
    setStatusAddScore(false)
   }

   const handleStatusEditScoreGiua = () => {
    setStatusEditScoreGiua(statusEditScoreGiua?false:true)
   }

   const handleStatusEditScoreCuoi = () => {
    setStatusEditScoreCuoi(statusEditScoreCuoi?false:true)
   }

   const handleThongke = async (score) => {
     const midtermScore = await score.find(item => (item.HOCKY === "Gi???a k???"))
     const endtermScore = await score.find(item => (item.HOCKY === "Cu???i k???"))
     const mediumScore =  (( +midtermScore.ANH + +midtermScore.TOAN + +midtermScore.VAN + +midtermScore.LY + +midtermScore.HOA + +midtermScore.SINH + +midtermScore.SU + +midtermScore.DIA + +midtermScore.GDCN)/9 + (+endtermScore.ANH + +endtermScore.TOAN + +endtermScore.VAN + +endtermScore.LY + +endtermScore.HOA + +endtermScore.SINH + +endtermScore.SU + +endtermScore.DIA + +endtermScore.GDCN)/9 * 2) / 3
     setmediumScore(Math.round(mediumScore * 100) / 100)
     setStatusThongke(statusThongke?false:true)
   }

   const handleStatusExitEditScoreGiua = () => {
    setStatusEditScoreGiua(false)
   }

   const handleEditSuccessStudent = (idst) => {
    const newStudent = {HOHS: HohsCr, TENHS: TenhsCr, NGAYSINH: NgaysinhhsCr, GIOITINH: GioitinhhsCr}
    dispatch(updateStudent(idst, newStudent))
    alert("S???a Th??nh C??ng!")
    navigate(`/displayTracuu/${student.MALOP._id}`)
 }

   const handleStatusExitEditScoreCuoi = () => {
    setStatusEditScoreCuoi(false)
   }

   const handleStatusSuccessEditScoreGiua = (idScore) => {
    const newScoreGiua = {
      TOAN: TOAN,
      LY: LY,
      HOA: HOA,
      SINH: SINH,
      VAN: VAN,
      ANH: ANH,
      SU: SU,
      DIA: DIA,
      GDCN: GDCN,
    }
    dispatch(updateScore(idScore,newScoreGiua))
    alert("S???a ??i???m Gi???a K??? Th??nh C??ng")
   }
   const handleStatusSuccessEditScoreCuoi = (idScore) => {
    const newScoreCuoi = {
      TOAN: TOAN,
      LY: LY,
      HOA: HOA,
      SINH: SINH,
      VAN: VAN,
      ANH: ANH,
      SU: SU,
      DIA: DIA,
      GDCN: GDCN,
    }
    dispatch(updateScore(idScore,newScoreCuoi))
    alert("S???a ??i???m Cu???i K??? Th??nh C??ng")
   }




useEffect(() => {
     dispatch(listStudentDetails(id))
     dispatch(scoreStudentDetail(id))
}, [ id ,mediumScore, dispatch])

  return (
    <div className='info_student_lookup'>
        <div className='info_student_lookup_container'>
            <div className='info_student_title'>TH??NG TIN H???C SINH</div>
            <div className='info_student_body'>
              <div>
              <div className='info_student_body_content'>
                <div className='info_student_list'>
                   <span>+ H??? T??n H???c Sinh: {student.HOHS} {student.TENHS}</span>
                   <span>+ Ng??y Sinh: {student.NGAYSINH}</span>
                   <span>+ Gi???i T??nh: {student.GIOITINH}</span>
                   <span>+ Gi??o Vi??n Ch??? Nhi???m: {teacher.HOGV} {teacher.TENGV} </span>
                   <span>+ H???c Sinh L???p: {detailClass_inyear.PHONGHOC} </span>
                     <span>+ N??m H???c: {schoolYear.THOIGIAN} </span>
                </div>
                <div className='function_student'>
                 <button className='function_student_btn edit' onClick={handleStatusEditStudent}>S???a Th??ng Tin</button>
                 <button className='function_student_btn remove' onClick={handleStatusRemoveStudent}>X??a H???c Sinh</button>
                 {statusRemoveStudent? 
                 <div className='notify_confirm'>
                    <span>B???n ch???c ch???n mu???n x??a h???c sinh n??y!!!</span>
                    <div>
                    <button className='notify_confirm_btn_remove' onClick={() => handleRemoveStudent(student._id)}>X??a</button>
                    <button className='notify_confirm_btn_exit' onClick={handleExitRemove}>Tho??t</button>
                    </div>
                 </div> : <></>}
                </div>
              </div>
              {statusEditStudent ? 
              <div className='student_edit_form'>
                <div className='student_edit_form_content'>
                  <span>Thay ?????i Th??ng Tin</span>
                  <input placeholder={student.HOHS} className='student_edit_form_input' onChange={(e) => setHohsCr(e.target.value)}/>
                  <input placeholder={student.TENHS} className='student_edit_form_input' onChange={(e) => setTenhsCr(e.target.value)}/>
                  <input placeholder={student.NGAYSINH} className='student_edit_form_input' onChange={(e) => setNgaysinhhsCr(e.target.value)}/>
                  <input placeholder={student.GIOITINH} className='student_edit_form_input' onChange={(e) => setGioitinhhsCr(e.target.value)}/>
                </div>
                  <div className='student_edit_form_function'>
                    <button className='student_edit_form_btn' onClick={() => handleEditSuccessStudent(student._id)}>S???a</button>
                    <button className='student_edit_form_btn' onClick={handleExit}>Tho??t</button>
                  </div>
              </div>: <></>}
              </div>
              <div className='info_student_score'>
                <div className='info_student_score_title'>
                  <div>TH??NG TIN ??I???M</div>
                  <div className='info_student_score_btn'>
                        <button className='function_student_btn edit' onClick={handleStatusAddScore}>Th??m ??i???m</button>
                        <button className='function_student_btn remove' onClick={handleStatusEditScore}>S???a ??i???m</button>
                    </div>
                </div>
                 {statusEditScore?
                    <div className='info_student_edit_score'>
                      <span className='sdfsfdsfdsf'>\/</span>
                      <button className='info_student_edit_score_giua' onClick={handleStatusEditScoreGiua}>??i???m gi???a k???</button>
                      <button className='info_student_edit_score_cuoi' onClick={handleStatusEditScoreCuoi}>??i???m cu???i k???</button>
                    </div> : <></>
                 }
                
                {statusAddScore?
                  <div className='add_score_form'>
                  <p className='add_score_form_title'>NH???P ??I???M</p>
                  <div>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETHOCKY(e.target.value)} placeholder='H???C K???'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETTOAN(e.target.value)} placeholder='TO??N'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETVAN(e.target.value)} placeholder='V??N'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETANH(e.target.value)} placeholder='ANH'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETLY(e.target.value)} placeholder='L??'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETHOA(e.target.value)} placeholder='H??A'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETSINH(e.target.value)} placeholder='SINH'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETSU(e.target.value)} placeholder='S???'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETDIA(e.target.value)} placeholder='?????A'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETGDCN(e.target.value)} placeholder='GDCN'/>
                  </div>
                  <div>
                    <button className='add_score_form_btn' onClick={handleAddScore}>Th??m</button>
                    <button className='add_score_form_btn' onClick={handleExitAddScore}>Tho??t</button>
                  </div>
                </div> : <></>}
                <div className='info_student_score_body'>
                    <div className='info_student_score_container'>
                      <div className='info_student_score_list'>
                        <p className='info_student_score_list_title'>??i???m Gi???a K???</p>
                        <div className="info_student_score_cot">
                          <span>TO??N</span>
                          <span>V??N</span>
                          <span>ANH</span>
                          <span>L??</span>
                          <span>H??A</span>
                          <span>S???</span>
                          <span>?????A</span>
                          <span>SINH</span>
                          <span>GDCD</span>
                        </div>
                        
                        <div className='info_student_score_table'>
                          {score.map(item => ( item.HOCKY === "Gi???a k???" && item.MAHS === student._id ?
                          <div>
                          <div className='info_student_score_table_item'>
                             <span>{item.TOAN}</span>
                             <span>{item.VAN}</span>
                             <span>{item.ANH}</span>
                             <span>{item.LY}</span>
                             <span>{item.HOA}</span>
                             <span>{item.SU}</span>
                             <span>{item.DIA}</span>
                             <span>{item.SINH}</span>
                             <span>{item.GDCN}</span>
                          </div>
                           {statusEditScoreGiua? 
                            <div className='info_student_edit_score_form'>
                            <span className='edit_score_form_title'>S???A ??I???M GI???A K???</span>
                             <div>
                             <input type={'text'} className='add_score_form_imput' onChange={(e) => SETTOAN(e.target.value)} placeholder={`To??n: ${item.TOAN}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETVAN(e.target.value)} placeholder={`V??n: ${item.VAN}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETANH(e.target.value)} placeholder={`Anh: ${item.ANH}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETLY(e.target.value)} placeholder={`L??: ${item.LY}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETHOA(e.target.value)} placeholder={`H??a: ${item.HOA}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETSINH(e.target.value)} placeholder={`Sinh: ${item.SINH}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETSU(e.target.value)} placeholder={`S???: ${item.SU}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETDIA(e.target.value)} placeholder={`?????a: ${item.DIA}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETGDCN(e.target.value)} placeholder={`GDCD: ${item.GDCN}`}/>
                             </div>
                             <div>
                               <button className='edit_score_form_btn' onClick={() => handleStatusSuccessEditScoreGiua(item._id)}>S???a</button>
                               <button className='edit_score_form_btn'  onClick={handleStatusExitEditScoreGiua}>Tho??t</button>
                             </div>
                            </div> : <></>
                            }
                          </div>
                           : <div></div>
                          ))}
                        </div>
                      </div>
                      <div className='info_student_score_list'>
                        <p className='info_student_score_list_title'>??i???m Cu???i K???</p>
                        <div className="info_student_score_cot">
                          <span>TO??N</span>
                          <span>V??N</span>
                          <span>ANH</span>
                          <span>L??</span>
                          <span>H??A</span>
                          <span>S???</span>
                          <span>?????A</span>
                          <span>SINH</span>
                          <span>GDCD</span>
                        </div>
                        <div className='info_student_score_table'>
                          {score.map(item => ( item.HOCKY === "Cu???i k???" && item.MAHS === student._id ?
                          <div>
                          <div className='info_student_score_table_item'>
                             <span>{item.TOAN}</span>
                             <span>{item.VAN}</span>
                             <span>{item.ANH}</span>
                             <span>{item.LY}</span>
                             <span>{item.HOA}</span>
                             <span>{item.SU}</span>
                             <span>{item.DIA}</span>
                             <span>{item.SINH}</span>
                             <span>{item.GDCN}</span>
                          </div>
                          {statusEditScoreCuoi?
                            <div className='info_student_edit_score_form'>
                           <span className='edit_score_form_title'>S???A ??I???M CU???I K???</span>
                            <div>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETTOAN(e.target.value)} placeholder={`To??n: ${item.TOAN}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETVAN(e.target.value)} placeholder={`V??n: ${item.VAN}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETANH(e.target.value)} placeholder={`Anh: ${item.ANH}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETLY(e.target.value)} placeholder={`L??: ${item.LY}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETHOA(e.target.value)} placeholder={`H??a: ${item.HOA}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETSINH(e.target.value)} placeholder={`Sinh: ${item.SINH}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETSU(e.target.value)} placeholder={`S???: ${item.SU}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETDIA(e.target.value)} placeholder={`?????a: ${item.DIA}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETGDCN(e.target.value)} placeholder={`GDCD: ${item.GDCN}`}/>
                            </div>
                            <div>
                              <button className='edit_score_form_btn' onClick={() => handleStatusSuccessEditScoreCuoi(item._id)}>S???a</button>
                              <button className='edit_score_form_btn' onClick={handleStatusExitEditScoreCuoi}>Tho??t</button>
                            </div>
                           </div> : <></>
                           }

                          </div> : <div></div>
                          ))}
                        </div>
                      </div>
                      <button className='info_student_thongke_btn' onClick={() => handleThongke(score)}>Th???ng K?? Cu???i N??m</button>
                      {statusThongke ?
                      <div className='info_overall_score_student'>
                        <div className='info_overall_score_student_item'>??i???m Trung B??nh: {mediumScore}</div>
                        <div className='info_overall_score_student_item'>X???p Lo???i H???c L???c: .{mediumScore > 8? <div> Gi???i</div> : <div>{mediumScore > 6? <div> Kh??</div> : <div> Trung B??nh</div>}</div>}</div>
                      </div> : <></>
                      }
                    </div>
                    
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default InfoStudentLookup