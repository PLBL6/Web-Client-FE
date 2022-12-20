import React from "react"
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
    let idNewOrder
    await axios.post(URL_API_2 + `api/create-new-don-hang`, {
      data: {
        "khachHang": JSON.parse(localStorage.getItem("login").user.id),
        "tongTien": totalPrice
      },
      headers: {
        "mode": "no-cors",
        "Authorization": `${JSON.parse(localStorage.getItem("login")).token}`
      }
    }).then(res => { console.log(res.data); idNewOrder = res.data.id })


    CartItem.forEach((item) => {
      axios.post(URL_API_2 + `api/create-new-chi-tiet-don-hang`, {
        data: {
          "maCTMH": item.detail.id,
          "maDH": idNewOrder,
          "soLuong": item.qty,
          "tongTien": ((item.gia * (100 - item.khuyenMai) / 100) * item.qty)
        },
        headers: {
          "mode": "no-cors",
          "Authorization": `${JSON.parse(localStorage.getItem("login")).token}`
        }
      })
        // .then(res => { console.log("Create chi tiet don Hang"), res.data })

    })

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
          <p className="cart-payment__value">{totalPrice} đ</p>
          <a className="btn-primary" href="/">Mua hàng</a>
        </div>
      </div>
    </div>
  )
}

export default Cart
