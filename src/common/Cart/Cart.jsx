import React from "react"
import CartShopItem from "./CartShopItem"
import "./cart.css"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  const CartitemSorted = CartItem.sort((a,b) => a.shop.id - b.shop.id)

  console.log("CartitemSorted:",CartitemSorted);

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
        {/* {CartItem.map((item) => {
          return (
            <div className="cart-shop boxShadow">
              <div className="cart-shop__info">
                <i className="cart-shop__icon fa-solid fa-shop"></i>
                <p className="cart-shop__name">{item.shop.name}</p>
              </div>
              {item}
            </div>

          )
        })} */}
        <div className="cart-payment boxShadow">
          <p className="cart-payment__text">Tổng thanh toán (0 sản phẩm):</p>
          <p className="cart-payment__value">999.999đ</p>
          <a className="btn-primary" href="/">Mua hàng</a>
        </div>


      </div>

      {/* <div className='container d_flex'>

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items'>Không có sản phầm nào trong giỏ hàng</h1>}

            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details-item'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price} x {item.qty}
                      <span>${productQty}</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart' onClick={item.qty = 0}>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>

                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Giỏ hàng</h2>
            <div className=' d_flex'>
              <h4>Tổng tiền :</h4>
              <h3>${totalPrice}</h3>
            </div>
            <button className="btn-buy">MUA</button>

          </div>
        </div> */}
    </div>
  )
}

export default Cart
