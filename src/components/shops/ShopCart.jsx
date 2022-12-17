import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CardProduct from "./CardProduct"
import axios from "axios"
import { URL_API } from "../../url"

const ShopCart = ({ category }) => {
  const [products1, setProducts1] = useState([])

  useEffect(() => {
      const getProductByCategory = async () => {
        const data = await axios(URL_API+`api/get-all-mathangs-by-id-danhmuc?danhMucID=${category}`)
        setProducts1(data.data.mathangs)
    }

    getProductByCategory()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: products1?.length > 4 ? 5 :products1?.length,
    slidesToScroll: 1,
    autoplay: false,
  }

  return (
    <>
      <Slider {...settings}>
        {products1.slice(0,10).map((shopItems, index) => {
          return (
            <CardProduct shopItems={shopItems} key={index}  />
          )
        })}
      </Slider>
    </>
  )
}

export default ShopCart
