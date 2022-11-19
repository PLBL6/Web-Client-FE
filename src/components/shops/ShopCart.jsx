import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CardProduct from "./CardProduct"

const ShopCart = ({ shopItems, addToCart, category }) => {
  const [products1, setProducts1] = useState([])

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => setProducts1(data.products))
  }, [category])

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

        {products1.map((shopItems, index) => {
          return (
            <CardProduct shopItems={shopItems} addToCart={addToCart}  key={index}  />
          )
        })}
      </Slider>
    </>
  )
}

export default ShopCart
