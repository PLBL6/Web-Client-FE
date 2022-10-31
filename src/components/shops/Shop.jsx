import React from "react"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({nameShop, addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container mb40'>
          <div className='contentWidthFull'>
            <div className='heading c_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Áo Quần</h2>
              </div>
              <a href="/category" className='heading-right row ' >
                <span>Xem thêm</span>
                <i className='fa-solid fa-caret-right'></i>
              </a>
            </div>
            <div>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='contentWidthFull'>
            <div className='heading c_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Phụ kiện</h2>
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
