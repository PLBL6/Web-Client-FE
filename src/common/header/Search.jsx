// import logo from "../../components/assets/images/logo.svg"
// import { useState } from "react"
import { Link } from "react-router-dom"

const Search = ({ CartItem, OnOpenModalLogin, OnOpenModalSignUp, user, handleLogout,setIsVendorLogin }) => {

  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  let notify = document.querySelector('.search .cart span')

  if (notify) {
    if (CartItem.length === 0) {
      notify.style.display = 'none'
    } else {
      notify.style.display = 'block'
    }
  }

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <Link className="logoShoplink" to="/">
              Charlotte
            </Link>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Tìm kiếm sản phẩm mong muốn ...' />
            <button className="btn-search">Tìm kiếm</button>
          </div>

          <div className='user icon f_flex width'>
            {user ?
              // <div className="header-user">
              //   <img className="header-user__img" src={user.photoURL} alt="Avatar" />
              //   <span className="header-user__name">{user.displayName}</span>

              //   <ul className="header__navbar-user-menu">
              //     <li className="header__navbar-user-item ">
              //       <a href="/">Tài khoản của tôi</a>
              //     </li>
              //     <li className="header__navbar-user-item header__navbar-user-item--separate">
              //       <a onClick={handleLogout} href="/">Đăng xuất</a>
              //     </li>


              //   </ul>
              // </div>
              ""
              :
              <ul className="list-signup-signin">
                <li className="item-separate login-field">
                  Đăng nhập
                  <ul className="login-options">
                    <li onClick={()=> {setIsVendorLogin(false); OnOpenModalLogin(); }} className="option-1 ">
                      Mua sản phẩm
                    </li>
                    <li onClick={()=> {setIsVendorLogin(true); OnOpenModalLogin(); }} className="option-2 ">
                      Nhà cung cấp
                    </li>
                  </ul>
                </li>
                <li className="register-field">
                  Đăng kí
                  <ul className="register-options ">
                    <li onClick={()=> {setIsVendorLogin(false); OnOpenModalSignUp(); }} className="option-1 ">
                      Trở thành người mua
                    </li>
                    <li onClick={()=> {setIsVendorLogin(true); OnOpenModalSignUp(); }} className="option-2 ">
                      Trở thành nhà cung cấp
                    </li>
                  </ul>
                </li>
              </ul>

            }
            <div className="user-cart">
              {user ? '' :
                <div className="user">
                  <Link to='/user/profile' onClick={() => localStorage.setItem("indexCategoryUserPage", 0)}>
                    <i className='fa fa-user icon-circle'></i>
                  </Link>
                </div>}

              <div className='cart'>
                <Link to='/cart'>
                  <i className='fa fa-shopping-bag icon-circle'></i>
                  <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Search
