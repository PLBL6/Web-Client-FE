import React from "react"

const Categories = ({ data }) => {
  return (
    <>
      <div className='category' style={{marginTop:"12px"}}>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
