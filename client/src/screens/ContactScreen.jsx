import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactScreen = () => {
  return (
    <>
        <Header />
        <Navbar />
        <div className='contact_container'>
            <div style={{maxWidth: 1200, margin: 'auto',padding: '200px 40px 40px 40px',
             minHeight: 500, display: 'flex', flexDirection: 'column'}} className='contact_content'>
                <h2>Trường THCS Hàm Cường</h2>
                <span style={{marginBottom: 10}}>Mã Số Thuế: 3400745316</span>
                <span style={{marginBottom: 10}}>Địa chỉ: Xã Hàm Cường - Xã Hàm Cường - Huyện Hàm Thuận Nam - Bình Thuận</span>
                <span style={{marginBottom: 10}}>Ngày cấp GPKD: 01-01-1970</span>
                <span style={{marginBottom: 10}}>Nơi đăng ký quản lý: Chi cục Thuế Huyện Hàm Thuận Nam</span>
                <span style={{marginBottom: 10}}>Ngày bắt đầu HĐ: 01-01-1970</span>
                <span style={{marginBottom: 10}}>Năm tài chính: 1970</span>
                <span style={{marginBottom: 10}}>Ngành nghề chính: Giáo dục trung học cơ sở và trung học phổ thông</span>
                <h3>Câu hỏi liên quan tới trường THCS Hàm Cường</h3>
                <span style={{marginBottom: 10}}>➊ Mã số thuế của Trường THCS Hàm Cường?</span>
                <span style={{marginBottom: 10}}>✓ Trả lời: 3400745316</span>
                <span style={{marginBottom: 10}}>➋ Số điện thoại Trường THCS Hàm Cường?</span>
                <span style={{marginBottom: 10}}>✓ Trả lời: Số điện thoại của Trường THCS Hàm Cường chưa có thông tin chi tiết</span>
                <span style={{marginBottom: 10}}>➌ Địa chỉ của Trường THCS Hàm Cường?</span>
                <span style={{marginBottom: 10}}>✓ Trả lời: Xã Hàm Cường - Xã Hàm Cường - Huyện Hàm Thuận Nam - Bình Thuận</span>
                <span style={{marginBottom: 10}}>➍ Giám đốc của Trường THCS Hàm Cường là ai?</span>
                <span style={{marginBottom: 10}}>✓ Trả lời: Nguyễn Văn Hoàng</span>
                <span style={{marginBottom: 10}}>❺ Ngành nghề chính của Trường THCS Hàm Cường?</span>
                <span style={{marginBottom: 10}}>✓ Trả lời: Giáo dục trung học cơ sở và trung học phổ thông</span>
            </div>
        </div>
        <Footer />

    </>
  )
}

export default ContactScreen