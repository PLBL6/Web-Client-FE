import React from "react"
import ShopCart from "./ShopCart"
import CategoryProductData from "../data/CategoryProductData"
import "./style.css"
import { Link } from "react-router-dom"

const Shop = ({ addToCart, shopItems }) => {
  const handleLinkActive = (e, index, cate) => {
    localStorage.setItem("indexCategory", index)
    localStorage.setItem("Category", JSON.stringify(cate))
  }
  return (
    <>
      <section className='shop background'>
        {CategoryProductData.map((item, index) => (
          <div key={index} className='container mb40'>
            <div className='contentWidthFull'>
              <div className='heading c_flex'>
                <div className='heading-left row  f_flex'>
                  <h2>{item.cateName}</h2>
                </div>
                <Link onClick={e => handleLinkActive(e,index,item.slug)} to={`category/${item.slug}`} className='heading-right row ' >
                  <span>Xem thêm</span>
                  <i className='fa-solid fa-caret-right'></i>
                </Link>
              </div>
              <div>
                <ShopCart addToCart={addToCart} shopItems={shopItems} category={item.slug} />
              </div>
            </div>
          </div>

        ))}

      </section>

    </>
  )
}

export default Shop
