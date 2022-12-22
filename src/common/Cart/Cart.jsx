import React, { useState } from "react"
import CartShopItem from "./CartShopItem"
import "./cart.css"
import axios from "axios"
import { filterByShop } from "../../filterByShop"
import { URL_API_2 } from "../../url"

const Cart = ({ CartItem, addToCart, decreaseQty, removeCartItem }) => {
  const totalPrice = CartItem.reduce((price, item) => price + ((item.gia * (100 - item.khuyenMai) / 100) * item.qty), 0)
  console.log("CartItem:", CartItem);
  console.log("CartItemFilterByShop:", filterByShop(CartItem));
  const CartItemFilterByShop = filterByShop(CartItem)

  const CreateOrder = async () => {
    const respone = await axios({
      method: "POST",
      url: URL_API_2 + "api/create-new-don-hang",
      headers: {
        "Content-Type": "application/json",
        "Authorization": JSON.parse(localStorage.getItem("login")).token,
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        "khachHang": JSON.parse(localStorage.getItem("login")).user.id,
        "tongTien": totalPrice
      },
    })
    // .then(res => { console.log(res.data.errMessage); newOrderId = res.data.errMessage.id; console.log("idNewOrder:", newOrderId); })
    console.log(respone.data.errMessage);
    return respone.data.errMessage.id
  }

  // const CreateDetailOrder = async (detailOrder, id) => {
  //   await fetch(URL_API_2 + "api/create-new-chi-tiet-don-hang", {
  //     method: "POST",

  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": JSON.parse(localStorage.getItem("login")).token,
  //       // "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify({
  //       "maCTMH": detailOrder.detail.id,
  //       "maDH": id,
  //       "soLuong": detailOrder.qty,
  //       "tongTien": ((detailOrder.gia * (100 - detailOrder.khuyenMai) / 100) * detailOrder.qty)
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data.errMessage))
  //   // console.log(`Create chi tiet don Hang ${index} :`, respone.data.errMessage)
  // }
  const CreateDetailOrder = async (detailOrder, id) => {
    await axios({
      method: "POST",
      url: URL_API_2 + "api/create-new-chi-tiet-don-hang",
      headers: {
        "Content-Type": "application/json",
        "Authorization": JSON.parse(localStorage.getItem("login")).token,
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        "maCTMH": detailOrder.detail.id,
        "maDH": id,
        "soLuong": detailOrder.qty,
        "tongTien": ((detailOrder.gia * (100 - detailOrder.khuyenMai) / 100) * detailOrder.qty)
      }
    })
      .then(data => console.log(data.data.errMessage))
  }

  const CreatePurchareDetail = async (detailOrder, id) => {
    await CreateDetailOrder(detailOrder, id)
  }

  const handlePurcharse = async (CartItem) => {
    if (CartItem.length > 0) {
      const id = await CreateOrder()

      CartItem.map((item, index) => {
        CreatePurchareDetail(item, id)
      })
    }

    else {
      alert("Không có sản phẩm nào để mua")
    }
  }

  return (
    <div className='cart-section'>
      <div className="grid1200">
        <ul className="cart-header boxShadow">
          <li className="cart-header__item">Sản phẩm</li>
          <li className="cart-header__item">Đơn giá</li>
          <li className="cart-header__item">Số lượng</li>
          <li className="cart-header__item">Số tiền</li>
          <li className="cart-header__item">Thao tác</li>
        </ul>
        {
          CartItemFilterByShop.map((item, index) => (
            <div className="cart-item-section" key={index}>
              <div className="cart-shop-info">
                <img className="cart-shop-img" src={item.nhaCungCap.anhDaiDien} alt="" />
                <p>{item.nhaCungCap.tenNguoiDung}</p>
              </div>
              {item.product.map((itemProduct, index2) => (
                <div key={index2} className="CartShopItem">
                  <CartShopItem item={itemProduct} addToCart={addToCart} decreaseQty={decreaseQty} removeCartItem={removeCartItem} />
                </div>
              ))
              }
            </div>
          ))
        }
        <div className="cart-payment boxShadow">
          <p className="cart-payment__text">Tổng thanh toán ({CartItem.length} sản phẩm):</p>
          <p className="cart-payment__value">{totalPrice} $</p>
          <button onClick={() => { handlePurcharse(CartItem) }} className="btn-primary">Mua hàng</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
