import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = ({ user, OnOpenModalLogin, OnOpenModalSignUp, setIsVendorLogin, isVendorLogin }) => {
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
          {JSON.parse(localStorage.getItem("login"))?.user && isVendorLogin
            ? <div className='catgrories d_flex'></div>
            : <div className='catgrories d_flex'>
              <span className='fa-solid fa-bars'></span>
              <h4>Danh mục<i className='fa fa-chevron-down'></i></h4>
            </div>
          }

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <a href="/">Trang chủ</a>
              </li>
              {/* <li>
                {JSON.parse(localStorage.getItem("login"))?.user && !isVendorLogin
                  ? <a onClick={(e) => handleLinkActiveUser(e, 0)} href='/user/profile'>Khách hàng</a>
                  : <Link onClick={() => { setIsVendorLogin(false); OnOpenModalLogin(); }} >Khách hàng</Link>}
              </li>
              <li>
                {JSON.parse(localStorage.getItem("login"))?.user && isVendorLogin
                  ? <Link onClick={(e) => handleLinkActiveShop(e, 0)} to="/user-shop/order">Doanh nghiệp</Link>
                  :
                  <Link onClick={() => { setIsVendorLogin(true); OnOpenModalLogin(); }} >Doanh nghiệp</Link>
                }
              </li> */}

              {!JSON.parse(localStorage.getItem("login"))?.user
                ? <>
                  <li><Link onClick={() => { setIsVendorLogin(false); OnOpenModalLogin(); }} >Khách hàng</Link></li>
                  <li><Link onClick={() => { setIsVendorLogin(true); OnOpenModalLogin(); }} >Doanh nghiệp</Link></li>
                </>
                : isVendorLogin
                  ? <li><Link onClick={(e) => handleLinkActiveShop(e, 0)} href="/user-shop/order">Doanh nghiệp</Link></li>
                  : <li><Link onClick={(e) => handleLinkActiveUser(e, 0)} href='/user/profile'>Khách hàng</Link></li>
              }

              {/* {isCustomer ?
                <li>
                  <Link onClick={(e) => handleLinkActiveUser(e, 0)} to='/user/profile'>Khách hàng</Link>
                </li> :
                <li>
                  <Link onClick={(e) => handleLinkActiveShop(e, 0)} to="/user-shop/order">Doanh nghiệp</Link>
                </li>} */}
              {JSON.parse(localStorage.getItem("login"))?.user ?
                <li>
                  <a href="/" onClick={() => { localStorage.removeItem("login"); localStorage.removeItem("isVendor"); localStorage.removeItem("CartItem") }}>Đăng xuất</a>
                </li>
                : ""}
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
