import React from "react"
import ShopCart from "../shops/ShopCart"


const Discount = ({ shopItems, addToCart }) => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt="sản phẩm giảm giá" />
              <h2>Khuyến mãi lớn</h2>
            </div>
            <a href="/category" className='heading-right row'>
              <span>Xem thêm</span>
              <i className='fa-solid fa-caret-right'></i>
            </a>
          </div>
          <ShopCart shopItems={shopItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default Discount
