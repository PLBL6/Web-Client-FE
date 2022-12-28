import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = ({ user, OnOpenModalLogin, OnOpenModalSignUp, setIsVendorLogin, isVendorLogin }) => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)


  const handleLinkActiveUser = (e, index) => {
    localStorage.setItem("indexCategoryUserPage", index)

  }
  const handleLinkActiveShop = (e, index) => {
    localStorage.setItem("indexCategoryShopPage", index)
    
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
                {/* <a href="/">Trang chủ</a> */}
                {JSON.parse(localStorage.getItem("login"))?.user
                  ? isVendorLogin
                    ? <a onClick={(e) => handleLinkActiveShop(e, 0)} href="/user-shop/order">Trang chủ</a>
                    : <a href="/">Trang chủ</a>
                  : <Link href="/">Trang chủ</Link>
                }
              </li>

              {!JSON.parse(localStorage.getItem("login"))?.user
                ? <>
                  <li><Link onClick={() => { setIsVendorLogin(false); OnOpenModalLogin(); }} >Khách hàng</Link></li>
                  <li><Link onClick={() => { setIsVendorLogin(true); OnOpenModalLogin(); }} >Doanh nghiệp</Link></li>
                </>
                : isVendorLogin
                  ? <li><a onClick={(e) => handleLinkActiveShop(e, 0)} href="/user-shop/order">Doanh nghiệp</a></li>
                  : <li><Link onClick={(e) => handleLinkActiveUser(e, 0)} to='/user/profile'>Khách hàng</Link></li>
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
                  <a href="/" onClick={() => {
                    // localStorage.removeItem("login");
                    // localStorage.removeItem("isVendor")
                    // localStorage.removeItem("CartItem")
                    // localStorage.removeItem("UserInfo")
                    localStorage.clear()
                  }}>Đăng xuất</a>
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
