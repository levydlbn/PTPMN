import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { listStudentInSchool } from '../../redux/actions/StudentActions';
import { listTeacher } from '../../redux/actions/TeacherAction';


const HomeLookup = () => {
    const dispatch = useDispatch()
  const listClassInYears = useSelector(state => state.listClassInYear)
  const listStudent = useSelector(state => state.studentList)
  const listTeachers = useSelector(state => state.listTeacher)
  const {listClass} = listClassInYears
  const {students} = listStudent
  const {teachers} = listTeachers

  const StudentNam = students.filter(item => item.GIOITINH === 'nam')
  console.log(StudentNam.length)
  const numberNu = students.length - StudentNam.length

  useEffect(() => {
    dispatch(listStudentInSchool())
    dispatch(listTeacher())
  }, [dispatch])
    const data = [
    {
      year: '2019-2020',
      gioi: 400,
      kha: 800,
      tb:  200,
    },{
      year: '2020-2021',
      gioi: 500,
      kha: 860,
      tb:  150,
    },{
      year: '2021-2022',
      gioi: 540,
      kha: 790,
      tb:  180,
    },{
      year: '2022- 2023',
      gioi: 460,
      kha: 900,
      tb:  150,
    },
  ]

  const data1 = [
    {
      name: "Nam",
      value: StudentNam.length
    },
    {
      name: "Nữ",
      value: numberNu,
    }

  ]

  return (
    <div>
            <div className='content_right_title'>THỐNG KÊ </div>
              <div className='content_right_body'>
                <div className='thongke_siso'>
                  <div className='siso_tong'>Tổng Số Học Sinh: {students.length}</div>
                  <div className='siso_tong'>Tổng Số Giáo Viên: {teachers.length}</div>
                  <div className='siso_tong'>Tổng Số Lớp Học: {listClass.length}</div>
                </div>
                <div className='thongke_chart'>
                  <div className='academic_chart'>
                   <p>Học lực</p>
                   <BarChart
                   width={500}
                   height={300}
                   data={data}
                   margin={{
                       top: 5,
                       right: 30,
                       left: 20,
                       bottom: 5,
                      }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="gioi" fill="#8884d8" />
                    <Bar dataKey="kha" fill="#82ca9d" />
                    <Bar dataKey="tb" fill="#999" />
                 </BarChart>
                  </div>
                  <div className='chart_gioitinh'>
                  <p>Tỷ lệ giới tính</p>
                  <PieChart width = { 330 }
                    height = { 300 }>
                   <Pie data = { data1 }
                       dataKey = "value"
                       nameKey = "name"
                       cx = "50%"
                       cy = "50%"
                       outerRadius = { 70 }
                       fill = "orange"
                        />
                    <Pie data = { data1 }
                        dataKey = "value"
                        nameKey = "name"
                        cx = "50%"
                        cy = "50%"
                        innerRadius = { 80 }
                        outerRadius = { 110 }
                        fill = "#0088fe"
                        label />
                  </PieChart>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default HomeLookup