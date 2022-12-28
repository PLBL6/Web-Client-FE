import React, { useState } from "react"
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Header from "./common/header/Header"
import MainPage from "./pages/MainPage"
import CartPage from "./pages/CartPage"
import Footer from "./common/footer/Footer"
import Login from "./components/Login/login"
import ProductDetailPage from "./pages/ProductDetailPage"
import ListProductPage from "./pages/ListProductPage"
import UserProfilePage from "./pages/UserProfilePage"
import UserShopPage from "./pages/UserShopPage"

function App() {
  const [isOpenModalLogin, SetOpenModalLogin] = useState(false)
  const [isOpenModalSignUp, SetOpenModalSignUp] = useState(false)
  const [isVendorLogin, setIsVendorLogin] = useState(() => {
    return JSON.parse(localStorage.getItem("isVendor")) ?? false
  })
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("UserInfo")) ?? {}
  })

  // console.log("user:",user);

  const handleClickLogin = () => {
    SetOpenModalLogin(true)
  }

  const handleClickSignUp = () => {
    SetOpenModalSignUp(true)
  }

  const [CartItem, setCartItem] = useState(() => {
    const cartStorage = JSON.parse(localStorage.getItem("CartItem"))
    return cartStorage ?? []
  })

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => (item.id === product.id) && (item.detail.id === product.detail.id))

    if (productExit) {
      setCartItem(CartItem.map((item) => ((item.id === product.id) && (item.detail.id === product.detail.id) ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product }])
    }

  }
  // console.log("Cart:", CartItem);
  localStorage.setItem("CartItem", JSON.stringify(CartItem))



  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => (item.id === product.id) && (item.detail.id === product.detail.id))

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => (item.id == product.id && item.detail.id !== product.detail.id) || item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id && item.detail.id === product.detail.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  const removeCartItem = (product) => {
    // const productExit = CartItem.find((item) => (item.id === product.id) && (item.detail.id === product.detail.id))
    setCartItem(CartItem.filter((item) => (item.id == product.id && item.detail.id !== product.detail.id) || item.id !== product.id))
  }
  // console.log("CartItem:", CartItem);
  // console.log("isVendorLogin:", isVendorLogin);

  return (
    <>
      {isOpenModalLogin || isOpenModalSignUp ?
        <Login
          isOpenModalLogin={isOpenModalLogin}
          SetOpenModalLogin={SetOpenModalLogin}
          isOpenModalSignUp={isOpenModalSignUp}
          SetOpenModalSignUp={SetOpenModalSignUp}
          isVendorLogin={isVendorLogin}
          setIsVendorLogin={setIsVendorLogin}
          user={user}
          setUser={setUser}
        />
        : ''}
      <Header
        OnOpenModalLogin={handleClickLogin}
        OnOpenModalSignUp={handleClickSignUp}
        CartItem={CartItem}
        user={user}
        isVendorLogin={isVendorLogin}
        setIsVendorLogin={setIsVendorLogin}
      />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/cart' element={<CartPage CartItem={CartItem} setCartItem={setCartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeCartItem={removeCartItem} />} />
        <Route path='/product/*' element={<ProductDetailPage CartItem={CartItem} addToCart={addToCart} />} />
        <Route path='/category/*' element={<ListProductPage />} />
        <Route path='/user/*' element={<UserProfilePage user={user} setUser={setUser} />} />
        <Route path='/user-shop/*' element={<UserShopPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
