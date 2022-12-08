import React, { useState } from "react"
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Header from "./common/header/Header"
import MainPage from "./pages/MainPage"
import Data from "./components/Data"
import CartPage from "./pages/CartPage"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import Login from "./components/Login/login"
// import { useEffect } from "react"
import ProductDetailPage from "./pages/ProductDetailPage"
import ListProductPage from "./pages/ListProductPage"
import UserProfilePage from "./pages/UserProfilePage"
import UserShopPage from "./pages/UserShopPage"
import axios from "axios"
import URL_API from "./url"



function App() {
  const [isOpenModalLogin, SetOpenModalLogin] = useState(false)
  const [isOpenModalSignUp, SetOpenModalSignUp] = useState(false)
  const [isVendorLogin, setIsVendorLogin] = useState(false)
  const [user, setUser] = useState(() => {
    const token = JSON.parse(localStorage.getItem("accessToken"))
    return token ?? null
  })

  const LoginCustomer = async (username, password) => {
    const body = {
      "tenNguoiDung": username,
      "matKhau": password
    }
    await axios.post(URL_API + `api/check-login-khachhang?matKhau&tenNguoiDung`, body)
      .then(response => localStorage.setItem("accessToken", response.data.errCode))
      .catch(error => console.error(error))
  }

  const handleClickLogin = () => {
    SetOpenModalLogin(true)
  }

  const handleClickSignUp = () => {
    SetOpenModalSignUp(true)
  }



  const { productItems } = Data
  const { shopItems } = Sdata


  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }



  return (
    <>
      {isOpenModalLogin || isOpenModalSignUp ?
        <Login
          isOpenModalLogin={isOpenModalLogin}
          SetOpenModalLogin={SetOpenModalLogin}
          isOpenModalSignUp={isOpenModalSignUp}
          SetOpenModalSignUp={SetOpenModalSignUp}
          isVendorLogin={isVendorLogin}
          LoginCustomer={LoginCustomer}
        />
        : ''}
      <Header
        OnOpenModalLogin={handleClickLogin}
        OnOpenModalSignUp={handleClickSignUp}
        CartItem={CartItem}
        user={user}
        setIsVendorLogin={setIsVendorLogin}
      />
      <Routes>
        <Route path='/' element={<MainPage productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
        <Route path='/cart' element={<CartPage CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
        <Route path='/product/*' element={<ProductDetailPage />} />
        <Route path='/category/*' element={<ListProductPage />} />
        <Route path='/user/*' element={<UserProfilePage />} />
        <Route path='/user-shop/*' element={<UserShopPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
