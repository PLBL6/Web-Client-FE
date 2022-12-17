import React from "react"
import ShopCart from "./ShopCart"
import CategoryProductData from "../data/CategoryProductData"
import "./style.css"
import { Link } from "react-router-dom"

const Shop = () => {
  const handleLinkActive = (e, index) => {
    localStorage.setItem("indexCategory", index)
  }
  return (
    <>
      <section className='shop background'>
        {CategoryProductData.map((item) => (
          <div key={item.id} className='container mb40'>
            <div className='contentWidthFull'>
              <div className='heading c_flex'>
                <div className='heading-left row  f_flex'>
                  <h2>{item.cateName}</h2>
                </div>
                <Link onClick={e => handleLinkActive(e,item.id)} to={`category/${item.id}`} className='heading-right row ' >
                  <span>Xem thêm</span>
                  <i className='fa-solid fa-caret-right'></i>
                </Link>
              </div>
              <div>
                <ShopCart category={item.id} />
              </div>
            </div>
          </div>

        ))}

      </section>

    </>
  )
}

export default Shop
