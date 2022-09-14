import React from "react"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({nameShop, addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container'>
          <div className='contentWidthFull'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Đồ điện tử</h2>
              </div>
              <div className='heading-right row '>
                <span>Xem thêm</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='contentWidthFull'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Thời trang</h2>
              </div>
              <div className='heading-right row '>
                <span>Xem thêm</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Shop
