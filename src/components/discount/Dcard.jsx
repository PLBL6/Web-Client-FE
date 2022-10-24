import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../newarrivals/style.css"

const Dcard = ( shopItems, addToCart) => {
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
        {Ddata.map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <p className='discount'>70% Off</p>
                <div className='img'>
                  <img src={value.cover} alt='' width='100%' />
                </div>
                <h4>{value.name}</h4>

                <div >
                <span className="price-old mr12">$1000</span>
                <span>{value.price}</span>
                <button className="btn-addToCart" onClick={() => addToCart(value)}>
                  <i className='fa fa-plus'></i>
                </button>
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard
