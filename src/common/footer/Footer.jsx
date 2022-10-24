import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>MYSHOP</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i className='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i className='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
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
