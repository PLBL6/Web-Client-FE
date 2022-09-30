// import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"

const Search = ({ CartItem, OnOpenModalLogin, OnOpenModalSignUp }) => {

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
            <a className="logoShoplink" href="/">
              MyShop
            </a>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Tìm kiếm sản phẩm mong muốn ...' />
            <button className="btn-search">Tìm kiếm</button>
          </div>

          <div className='user icon f_flex width'>

            <ul className="list-signup-signin">
              <li onClick={OnOpenModalLogin} className="item-separate">Đăng nhập</li>
              <li onClick={OnOpenModalSignUp}>Đăng kí</li>
            </ul>
            <div className="user-cart">
              <div className="user">
                <Link to='/'>
                  <i className='fa fa-user icon-circle'></i>
                </Link>
              </div>

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
