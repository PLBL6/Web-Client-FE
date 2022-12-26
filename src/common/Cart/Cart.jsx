import React, { useState } from "react"
import CartShopItem from "./CartShopItem"
import "./cart.css"
import axios from "axios"
import { filterByShop } from "../../filterByShop"
import { URL_API_2 } from "../../url"

const Cart = ({ CartItem, addToCart, decreaseQty, removeCartItem }) => {
  const totalPrice = CartItem.reduce((price, item) => price + ((item.gia * (100 - item.khuyenMai) / 100) * item.qty), 0).toFixed(1)
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
    console.log(respone.data.errMessage);
    return respone.data.errMessage.id
  }

  const CreateDetailOrder = async (detailOrder, id) => {
    // await axios({
    //   method: "POST",
    //   url: URL_API_2 + "api/create-new-chi-tiet-don-hang",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": JSON.parse(localStorage.getItem("login")).token,
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   data: {
    //     "maCTMH": detailOrder.detail.id,
    //     "maDH": id,
    //     "soLuong": detailOrder.qty,
    //     "tongTien": ((detailOrder.gia * (100 - detailOrder.khuyenMai) / 100) * detailOrder.qty),
    //     "trangThai": "Đã đặt"
    //   }
    // })
    //   .then(data => console.log(data.data.errMessage))
    const res = await axios.post(URL_API_2 + "api/create-new-chi-tiet-don-hang", {
      "maCTMH": detailOrder.detail.id,
      "maDH": id,
      "soLuong": detailOrder.qty,
      "tongTien": ((detailOrder.gia * (100 - detailOrder.khuyenMai) / 100) * detailOrder.qty),
      "trangThai": "Đã đặt"
    },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": JSON.parse(localStorage.getItem("login")).token,
          // "Access-Control-Allow-Origin": "*",
        },
      }
    )
    console.log("Create ctmh:", res.data.errMessage);
  }

  const UpdateQuantity = async (idDetailProduct, qty) => {
    const data = await axios.put(URL_API_2 + "api/update-chitietmathang-by-id", {
      "id": idDetailProduct,
      "soLuong": qty,
    },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": JSON.parse(localStorage.getItem("login")).token,
          // "Access-Control-Allow-Origin": "*",
        },
      }
    )
    console.log("Update qty:", data.data.errMessage);
  }

  const CreatePurchareDetail = async (detailOrder, id) => {
    await CreateDetailOrder(detailOrder, id)
  }

  const handlePurcharse = async (CartItem) => {
    if (CartItem.length > 0) {
      const id = await CreateOrder()

      CartItem.map(async (item, index) => {
        await CreatePurchareDetail(item, id)
        await UpdateQuantity(item.detail.id, item.qty)
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
