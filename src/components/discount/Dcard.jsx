import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../newarrivals/style.css"

const Dcard = ({ shopItems, addToCart }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {shopItems.map((value, index) => {
          return (
            <div key={value.id}>
              <div onClick={() => {window.location.href="http://localhost:3000/product"}} className='box product'>
                <p className='discount'>{value.discount}% Off</p>
                <div className='img'>
                  <img src={value.cover} alt='' width='100%' />
                </div>
                <h4>{value.name}</h4>

                <div >
                  <span className="price-old mr12">$1000</span>
                  <span>${value.price}</span>
                  <button className="btn-addToCart" onClick={(e) => {addToCart(value); e.stopPropagation()}}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard
