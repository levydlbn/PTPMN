import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

import mesIcon from '../static/image/icon_thong_bao-1546501833.jpg'
import recordIcon from '../static/image/14140480543330_tuyendungnhansu-icon.png'
import schedule from '../static/image/th (11).jpg'
import tuitionIcon from '../static/image/icon-thuong-thuong-che-35eb139f6a5455.jpg'
import activeIcon from '../static/image/society-social-interaction-friend-activity-512.png'
import resultIcon from '../static/image/Kt-qu-hc-tp-hc-sinh-ket-qua-hoc-tap.png'
import procedureIcon from '../static/image/th (12).jpg'
import helpIcon from '../static/image/Help.png'

import '.././static/css/service.css'
import { Link } from 'react-router-dom'

const ServiceScreen = () => {
   const services = [
    {
        title: "THƯ BÁO TIN NHẮN",
        type: "messageAlert",
        icon: mesIcon,
        describe: "Các thông báo mới nhất cho học sinh"
    },
    {
        title: "HỒ SƠ HỌC SINH",
        type: "studentRecords",
        icon: recordIcon,
        describe: "Các thông tin cá nhân, địa chỉ liên lạc, điện thoại học sinh"
    },{
        title: "THỜI KHÓA BIỂU",
        type: "schedule",
        icon: schedule,
        describe: "Thông tin về thời khóa biểu của học sinh"
    },{
        title: "HỌC PHÍ CÔNG NỢ",
        type: "tuition",
        icon: tuitionIcon,
        describe: "Thông tin về học phí của Sinh viên"
    },{
        title: "HOẠT ĐỘNG NGOẠI KHÓA",
        type: "activities",
        icon: activeIcon,
        describe: "Các chương trình do nhà trường tổ chức"
    },{
        title: "KẾT QUẢ HỌC TẬP",
        type: "resultStudy",
        icon: resultIcon,
        describe: "Thông tin về kết quả học tập của Học sinh"
    },{
        title: "THỦ TỤC HÀNH CHÍNH",
        type: "procedure",
        icon: procedureIcon,
        describe: "Cấp các loại giấy tờ"
    },
    {
        title: "TRỢ GIÚP",
        type: "help",
        icon: helpIcon,
        describe: "Tiếp nhận & trả lời hỏi đáp dành cho sinh viên"
    }
   ]

  return (
    <>
        <Header />
        <Navbar />
        <div className='service_container'>
            <div className='service_content'>
                <div className='service_list'>
                    {services.map(item => (
                        <div className='service_item'>
                            <Link to={`/service/${item.type}`}>
                              <div className='service_item_container'>
                                <span>{item.title}</span>
                                <img src={item.icon} alt='sfsdf' style={{height: 68, borderRadius: '50%', marginBottom: 10}} />
                                <p>{item.describe}</p>
                              </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </>
)
}

export default ServiceScreen