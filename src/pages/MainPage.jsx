import React from "react"
import Home from "../components/MainPage/Home"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"

const MainPage = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      {/* <FlashDeals productItems={productItems} addToCart={addToCart} /> */}
      {/* <TopCate /> */}
      {/* <NewArrivals /> */}
      <Discount shopItems={shopItems} addToCart={addToCart} />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default MainPage
