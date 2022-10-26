import React from "react"
import SlideCard from "./SlideCard"
import Sdata from "../data/Sdata"

const SliderHome = () => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard data = {Sdata} />
        </div>
      </section>
    </>
  )
}

export default SliderHome
