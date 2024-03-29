import React from "react"
import "./Header.css"

import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem, OnOpenModalLogin, OnOpenModalSignUp, user, isVendorLogin, setIsVendorLogin }) => {
  return (
    <>
      <Search
        OnOpenModalLogin={OnOpenModalLogin}
        OnOpenModalSignUp={OnOpenModalSignUp}
        CartItem={CartItem}
        setIsVendorLogin={setIsVendorLogin}
        isVendorLogin={isVendorLogin}
        user={user}
      />
      <Navbar
        OnOpenModalLogin={OnOpenModalLogin}
        OnOpenModalSignUp={OnOpenModalSignUp}
        setIsVendorLogin={setIsVendorLogin}
        isVendorLogin={isVendorLogin}
      />
    </>
  )
}

export default Header
