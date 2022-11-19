import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import CategoryProductData from "../data/CategoryProductData"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex home-content'>
          <Categories data = {CategoryProductData}  />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
