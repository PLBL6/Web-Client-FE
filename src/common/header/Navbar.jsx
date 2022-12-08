import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = ({ isCustomer, user }) => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)

  const handleLinkActiveUser = (e, index) => {
    localStorage.setItem("indexCategoryUserPage", index)
    window.location.href = "http://localhost:3000/user/profile"

  }
  const handleLinkActiveShop = (e, index) => {
    localStorage.setItem("indexCategoryShopPage", index)
    window.location.href = "http://localhost:3000/user-shop/order"
  }
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span className='fa-solid fa-bars'></span>
            <h4>
              Danh mục <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>Trang chủ</Link>
              </li>
              <li>
                <Link onClick={(e) => handleLinkActiveUser(e,0)} to='/user/profile'>Khách hàng</Link>
              </li>
              <li>
                <Link onClick={(e) => handleLinkActiveShop(e, 0)} to="/user-shop/order">Doanh nghiệp</Link>
              </li>
              {/* {isCustomer ?
                <li>
                  <Link onClick={(e) => handleLinkActiveUser(e, 0)} to='/user/profile'>Khách hàng</Link>
                </li> :
                <li>
                  <Link onClick={(e) => handleLinkActiveShop(e, 0)} to="/user-shop/order">Doanh nghiệp</Link>
                </li>} */}
              <li>
                <Link to='/'>Liên hệ</Link>
              </li>
            </ul>

            {/* <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button> */}
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
