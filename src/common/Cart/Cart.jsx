import React from "react"
import CartShopItem from "./CartShopItem"
import "./cart.css"

const Cart = ({ CartItem, addToCart, decreaseQty, removeCartItem }) => {
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * ((item.gia * (100-item.khuyenMai)/100) * item.qty), 0)

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
          CartItem.map((item, index) => (
            <div key={index} className="CartShopItem">
              <CartShopItem item={item} addToCart={addToCart} decreaseQty={decreaseQty} removeCartItem={removeCartItem}/>
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
