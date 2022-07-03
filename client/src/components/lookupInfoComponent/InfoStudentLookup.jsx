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
    alert("Xóa Thành Công!")
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
    alert("Thêm Điểm Thành Công")
    setStatusAddScore(false)
   }

   const handleStatusEditScoreGiua = () => {
    setStatusEditScoreGiua(statusEditScoreGiua?false:true)
   }

   const handleStatusEditScoreCuoi = () => {
    setStatusEditScoreCuoi(statusEditScoreCuoi?false:true)
   }

   const handleThongke = async (score) => {
     const midtermScore = await score.find(item => (item.HOCKY === "Giữa kỳ"))
     const endtermScore = await score.find(item => (item.HOCKY === "Cuối kỳ"))
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
    alert("Sửa Thành Công!")
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
    alert("Sửa Điểm Giữa Kỳ Thành Công")
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
    alert("Sửa Điểm Cuối Kỳ Thành Công")
   }




useEffect(() => {
     dispatch(listStudentDetails(id))
     dispatch(scoreStudentDetail(id))
}, [ id ,mediumScore, dispatch])

  return (
    <div className='info_student_lookup'>
        <div className='info_student_lookup_container'>
            <div className='info_student_title'>THÔNG TIN HỌC SINH</div>
            <div className='info_student_body'>
              <div>
              <div className='info_student_body_content'>
                <div className='info_student_list'>
                   <span>+ Họ Tên Học Sinh: {student.HOHS} {student.TENHS}</span>
                   <span>+ Ngày Sinh: {student.NGAYSINH}</span>
                   <span>+ Giới Tính: {student.GIOITINH}</span>
                   <span>+ Giáo Viên Chủ Nhiệm: {teacher.HOGV} {teacher.TENGV} </span>
                   <span>+ Học Sinh Lớp: {detailClass_inyear.PHONGHOC} </span>
                     <span>+ Năm Học: {schoolYear.THOIGIAN} </span>
                </div>
                <div className='function_student'>
                 <button className='function_student_btn edit' onClick={handleStatusEditStudent}>Sửa Thông Tin</button>
                 <button className='function_student_btn remove' onClick={handleStatusRemoveStudent}>Xóa Học Sinh</button>
                 {statusRemoveStudent? 
                 <div className='notify_confirm'>
                    <span>Bạn chắc chắn muốn xóa học sinh này!!!</span>
                    <div>
                    <button className='notify_confirm_btn_remove' onClick={() => handleRemoveStudent(student._id)}>Xóa</button>
                    <button className='notify_confirm_btn_exit' onClick={handleExitRemove}>Thoát</button>
                    </div>
                 </div> : <></>}
                </div>
              </div>
              {statusEditStudent ? 
              <div className='student_edit_form'>
                <div className='student_edit_form_content'>
                  <span>Thay Đổi Thông Tin</span>
                  <input placeholder={student.HOHS} className='student_edit_form_input' onChange={(e) => setHohsCr(e.target.value)}/>
                  <input placeholder={student.TENHS} className='student_edit_form_input' onChange={(e) => setTenhsCr(e.target.value)}/>
                  <input placeholder={student.NGAYSINH} className='student_edit_form_input' onChange={(e) => setNgaysinhhsCr(e.target.value)}/>
                  <input placeholder={student.GIOITINH} className='student_edit_form_input' onChange={(e) => setGioitinhhsCr(e.target.value)}/>
                </div>
                  <div className='student_edit_form_function'>
                    <button className='student_edit_form_btn' onClick={() => handleEditSuccessStudent(student._id)}>Sửa</button>
                    <button className='student_edit_form_btn' onClick={handleExit}>Thoát</button>
                  </div>
              </div>: <></>}
              </div>
              <div className='info_student_score'>
                <div className='info_student_score_title'>
                  <div>THÔNG TIN ĐIỂM</div>
                  <div className='info_student_score_btn'>
                        <button className='function_student_btn edit' onClick={handleStatusAddScore}>Thêm Điểm</button>
                        <button className='function_student_btn remove' onClick={handleStatusEditScore}>Sửa Điểm</button>
                    </div>
                </div>
                 {statusEditScore?
                    <div className='info_student_edit_score'>
                      <span className='sdfsfdsfdsf'>\/</span>
                      <button className='info_student_edit_score_giua' onClick={handleStatusEditScoreGiua}>Điểm giữa kỳ</button>
                      <button className='info_student_edit_score_cuoi' onClick={handleStatusEditScoreCuoi}>Điểm cuối kỳ</button>
                    </div> : <></>
                 }
                
                {statusAddScore?
                  <div className='add_score_form'>
                  <p className='add_score_form_title'>NHẬP ĐIỂM</p>
                  <div>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETHOCKY(e.target.value)} placeholder='HỌC KỲ'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETTOAN(e.target.value)} placeholder='TOÁN'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETVAN(e.target.value)} placeholder='VĂN'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETANH(e.target.value)} placeholder='ANH'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETLY(e.target.value)} placeholder='LÝ'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETHOA(e.target.value)} placeholder='HÓA'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETSINH(e.target.value)} placeholder='SINH'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETSU(e.target.value)} placeholder='SỬ'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETDIA(e.target.value)} placeholder='ĐỊA'/>
                    <input type={'text'} className='add_score_form_imput' onChange={(e) => SETGDCN(e.target.value)} placeholder='GDCN'/>
                  </div>
                  <div>
                    <button className='add_score_form_btn' onClick={handleAddScore}>Thêm</button>
                    <button className='add_score_form_btn' onClick={handleExitAddScore}>Thoát</button>
                  </div>
                </div> : <></>}
                <div className='info_student_score_body'>
                    <div className='info_student_score_container'>
                      <div className='info_student_score_list'>
                        <p className='info_student_score_list_title'>Điểm Giữa Kỳ</p>
                        <div className="info_student_score_cot">
                          <span>TOÁN</span>
                          <span>VĂN</span>
                          <span>ANH</span>
                          <span>LÝ</span>
                          <span>HÓA</span>
                          <span>SỬ</span>
                          <span>ĐỊA</span>
                          <span>SINH</span>
                          <span>GDCD</span>
                        </div>
                        
                        <div className='info_student_score_table'>
                          {score.map(item => ( item.HOCKY === "Giữa kỳ" && item.MAHS === student._id ?
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
                            <span className='edit_score_form_title'>SỬA ĐIỂM GIỮA KỲ</span>
                             <div>
                             <input type={'text'} className='add_score_form_imput' onChange={(e) => SETTOAN(e.target.value)} placeholder={`Toán: ${item.TOAN}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETVAN(e.target.value)} placeholder={`Văn: ${item.VAN}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETANH(e.target.value)} placeholder={`Anh: ${item.ANH}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETLY(e.target.value)} placeholder={`Lý: ${item.LY}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETHOA(e.target.value)} placeholder={`Hóa: ${item.HOA}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETSINH(e.target.value)} placeholder={`Sinh: ${item.SINH}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETSU(e.target.value)} placeholder={`Sử: ${item.SU}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETDIA(e.target.value)} placeholder={`Địa: ${item.DIA}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETGDCN(e.target.value)} placeholder={`GDCD: ${item.GDCN}`}/>
                             </div>
                             <div>
                               <button className='edit_score_form_btn' onClick={() => handleStatusSuccessEditScoreGiua(item._id)}>Sửa</button>
                               <button className='edit_score_form_btn'  onClick={handleStatusExitEditScoreGiua}>Thoát</button>
                             </div>
                            </div> : <></>
                            }
                          </div>
                           : <div></div>
                          ))}
                        </div>
                      </div>
                      <div className='info_student_score_list'>
                        <p className='info_student_score_list_title'>Điểm Cuối Kỳ</p>
                        <div className="info_student_score_cot">
                          <span>TOÁN</span>
                          <span>VĂN</span>
                          <span>ANH</span>
                          <span>LÝ</span>
                          <span>HÓA</span>
                          <span>SỬ</span>
                          <span>ĐỊA</span>
                          <span>SINH</span>
                          <span>GDCD</span>
                        </div>
                        <div className='info_student_score_table'>
                          {score.map(item => ( item.HOCKY === "Cuối kỳ" && item.MAHS === student._id ?
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
                           <span className='edit_score_form_title'>SỬA ĐIỂM CUỐI KỲ</span>
                            <div>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETTOAN(e.target.value)} placeholder={`Toán: ${item.TOAN}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETVAN(e.target.value)} placeholder={`Văn: ${item.VAN}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETANH(e.target.value)} placeholder={`Anh: ${item.ANH}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETLY(e.target.value)} placeholder={`Lý: ${item.LY}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETHOA(e.target.value)} placeholder={`Hóa: ${item.HOA}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETSINH(e.target.value)} placeholder={`Sinh: ${item.SINH}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETSU(e.target.value)} placeholder={`Sử: ${item.SU}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETDIA(e.target.value)} placeholder={`Địa: ${item.DIA}`}/>
                              <input type={'text'} className='add_score_form_imput' onChange={(e) => SETGDCN(e.target.value)} placeholder={`GDCD: ${item.GDCN}`}/>
                            </div>
                            <div>
                              <button className='edit_score_form_btn' onClick={() => handleStatusSuccessEditScoreCuoi(item._id)}>Sửa</button>
                              <button className='edit_score_form_btn' onClick={handleStatusExitEditScoreCuoi}>Thoát</button>
                            </div>
                           </div> : <></>
                           }

                          </div> : <div></div>
                          ))}
                        </div>
                      </div>
                      <button className='info_student_thongke_btn' onClick={() => handleThongke(score)}>Thống Kê Cuối Năm</button>
                      {statusThongke ?
                      <div className='info_overall_score_student'>
                        <div className='info_overall_score_student_item'>Điểm Trung Bình: {mediumScore}</div>
                        <div className='info_overall_score_student_item'>Xếp Loại Học Lực: .{mediumScore > 8? <div> Giỏi</div> : <div>{mediumScore > 6? <div> Khá</div> : <div> Trung Bình</div>}</div>}</div>
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