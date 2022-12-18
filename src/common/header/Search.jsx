// import logo from "../../components/assets/images/logo.svg"
// import { useState } from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { URL_API_2 } from "../../url"

const Search = ({ CartItem, OnOpenModalLogin, OnOpenModalSignUp, setIsVendorLogin, isVendorLogin, user }) => {
  const CartLength = JSON.parse(localStorage.getItem("CartItem")).length

  const handleLinkActiveShop = (e, index) => {
    localStorage.setItem("indexCategoryShopPage", index)
  }

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const search = document.querySelector(".search")
      search.classList.toggle("active", window.scrollY > 100)
    })

    const notify = document.querySelector('.search .cart span')
    if (notify) {
      if (CartItem.length === 0) {
        notify.style.display = 'none'
      } else {
        notify.style.display = 'block'
      }
    }
  }, [])

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            {JSON.parse(localStorage.getItem("login"))?.user
              ? isVendorLogin
                ? <a onClick={(e) => handleLinkActiveShop(e, 0)} className="logoShoplink" href="/user-shop/order">Charlotte </a>
                : <a className="logoShoplink" href="/">Charlotte </a>
              : <a className="logoShoplink" href="/">Charlotte </a>
            }
          </div>

          {JSON.parse(localStorage.getItem("login"))?.user && isVendorLogin
            ? <div className='search-box f_flex' style={{ border: "none", justifyContent: "flex-start" }}>
              <h3>KÊNH NGƯỜI BÁN</h3>
            </div>
            : <div className='search-box f_flex'>
              <i className='fa fa-search'></i>
              <input type='text' placeholder='Tìm kiếm sản phẩm mong muốn ...' />
              <button className="btn-search">Tìm kiếm</button>
            </div>
          }
          <div className='user icon f_flex width'>
            {JSON.parse(localStorage.getItem("login"))?.user ?
              <div className="header-user">
                <img className="header-user__img" src={user?.anhDaiDien} alt="Avatar" />
                <p className="header-user__name">{`${user?.ho} ${user?.ten}`}</p>
                <ul className="header__navbar-user-menu">
                  <li className="header__navbar-user-item ">
                    <Link to="/user/profile">Tài khoản của tôi</Link>
                    {/* {JSON.parse(localStorage.getItem("login"))?.user
                      ? <Link to="/user/profile">Tài khoản của tôi</Link>
                      : <Link onClick={() => { setIsVendorLogin(false); OnOpenModalLogin(); }} >Khách hàng</Link>
                    } */}
                  </li>
                  <li className="header__navbar-user-item header__navbar-user-item--separate">
                    <a onClick={() => {
                      localStorage.removeItem("login");
                      localStorage.removeItem("CartItem");
                      localStorage.removeItem("UserInfo");
                      window.location.reload()
                    }} href="/">Đăng xuất</a>
                  </li>
                </ul>
              </div>
              :
              <ul className="list-signup-signin">
                <li className="item-separate login-field">
                  Đăng nhập
                  <ul className="login-options">
                    <li onClick={() => { setIsVendorLogin(false); OnOpenModalLogin(); }} className="option-1 ">
                      Mua sản phẩm
                    </li>
                    <li onClick={() => { setIsVendorLogin(true); OnOpenModalLogin(); }} className="option-2 ">
                      Nhà cung cấp
                    </li>
                  </ul>
                </li>
                <li className="register-field">
                  Đăng kí
                  <ul className="register-options ">
                    <li onClick={() => { setIsVendorLogin(false); OnOpenModalSignUp(); }} className="option-1 ">
                      Trở thành người mua
                    </li>
                    <li onClick={() => { setIsVendorLogin(true); OnOpenModalSignUp(); }} className="option-2 ">
                      Trở thành nhà cung cấp
                    </li>
                  </ul>
                </li>
              </ul>

            }
            <div className="user-cart">
              {/* <div className="user">
                {JSON.parse(localStorage.getItem("login"))?.user
                  ? <Link to='/user/profile' onClick={() => localStorage.setItem("indexCategoryUserPage", 0)}>
                    <i className='fa fa-user icon-circle'></i>
                  </Link>
                  : <Link onClick={() => { setIsVendorLogin(false); OnOpenModalLogin(); }}>
                    <i className='fa fa-user icon-circle'></i>
                  </Link>
                }
              </div> */}

              {JSON.parse(localStorage.getItem("login"))?.user && isVendorLogin
                ? ""

                : <>
                  <div className="user">
                    {JSON.parse(localStorage.getItem("login"))?.user
                      ? <Link to='/user/profile' onClick={() => localStorage.setItem("indexCategoryUserPage", 0)}>
                        <i className='fa fa-user icon-circle'></i>
                      </Link>
                      : <Link onClick={() => { setIsVendorLogin(false); OnOpenModalLogin(); }}>
                        <i className='fa fa-user icon-circle'></i>
                      </Link>
                    }
                  </div>
                  <div className='cart'>
                    <a href='/cart'>
                      <i className='fa fa-shopping-bag icon-circle'></i>
                      {CartLength ? <span>{CartLength}</span> : ""}
                    </a>
                  </div>
                </>
              }
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Search
