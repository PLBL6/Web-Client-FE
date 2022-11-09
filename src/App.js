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
import { useEffect } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase"
import ProductDetailPage from "./pages/ProductDetailPage"
import ListProductPage from "./pages/ListProductPage"
import UserProfilePage from "./pages/UserProfilePage"
import UserShopPage from "./pages/UserShopPage"

function App() {
  const [isOpenModalLogin, SetOpenModalLogin] = useState(false)
  const [isOpenModalSignUp, SetOpenModalSignUp] = useState(false)

  const [user, setUser] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  // const auth = getAuth()

  // const clearInputs = () => {
  //   setEmail('')
  //   setPassword('')
  // }

  // const clearErrors = () => {
  //   setEmailError('')
  //   setPassword('')
  // }

  const handleLogin = async () => {
    // clearErrors()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSignUp = async () => {
    // clearErrors()
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const handleLogout = async () => {
    await signOut(auth)
  }

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // clearInputs()
        setUser(user)
        console.log('Login by user:', user.email);
      } else {
        setUser("");
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

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
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          user={user}
        />
        : ''}
      <Header OnOpenModalLogin={handleClickLogin} OnOpenModalSignUp={handleClickSignUp} CartItem={CartItem} user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<MainPage productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
        <Route path='/cart' element={<CartPage CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
        <Route path='/product' element={<ProductDetailPage />} />
        <Route path='/category' element={<ListProductPage />} />
        <Route path='/user/*' element={<UserProfilePage />} />
        <Route path='/user-shop/*' element={<UserShopPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
