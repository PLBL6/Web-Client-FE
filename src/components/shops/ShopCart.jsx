import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ShopCart = ({ shopItems, addToCart }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
  }

  return (
    <>
      <Slider {...settings}>

        {shopItems.map((shopItems, index) => {
          return (
            <div onClick={() => {window.location.href="http://localhost:3000/product"}} className='box cartProduct' key={index}>
              <div className='product mtop'>
                <div className='product-img' style={{backgroundImage:`url(${shopItems.cover})`}}>
                  <span className='discount'>{shopItems.discount}% Off</span>
                </div>
                <div className='product-details'>
                  <h3>{shopItems.name}</h3>
                  <div className='price'>
                    <div>
                      <h4 className="price-old"> $1000</h4>
                      <h4>${shopItems.price}.00 </h4>
                    </div>
                    <button className="btn-addToCart" onClick={(e) => {addToCart(shopItems); e.stopPropagation()}}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default ShopCart
