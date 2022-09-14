import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Giao hàng tiện lợi",
      decs: "",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Bảo mật thông tin",
      decs: "",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Giao dịch nhanh chóng",
      decs: "",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Hỗ trợ 24/7",
      decs: "",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
