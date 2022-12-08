import React from "react"
import "./Home.css"
import SliderHome from "./Slider"
import CategoryProductData from "../data/CategoryProductData"
import Category from "../Category/Category"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex home-content'>
          <Category data = {CategoryProductData}  />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
