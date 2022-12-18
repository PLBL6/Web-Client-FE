import React from "react"
import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <Link to="/" className="name-page">CHARLOTTE</Link>
            <p>Trang web mua và đăng bán hàng thời trang, phụ kiện ...</p>
          </div>

          <div className='box'>
            <h2>Thông tin chung</h2>
            <ul>
              
            </ul>
          </div>
          <div className='box'>
            <h2>Chăm sóc khách hàng</h2>
            <ul>
              
            </ul>
          </div>
          <div className='box'>
            <h2>Liên hệ</h2>
            <ul>
              
            </ul>
          </div>
          
        </div>
        
        
      </footer>
    </>
  )
}

export default Footer
