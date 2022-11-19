import React from "react"

const Categories = ({ data }) => {
  return (
    <>
      <div className='category' style={{marginTop:"12px"}}>
        {data.map((value, index) => {
          return (
            <div className='box category-mainpage' key={index}>
              <i className={value.cateIcon}></i>
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
