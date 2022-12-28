import React from "react"
import SlideCard from "./SlideCard"
import BannerData from "../data/BannerData"

const SliderHome = () => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard data = {BannerData} />
        </div>
      </section>
    </>
  )
}

export default SliderHome
