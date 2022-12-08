import React from "react"
import "./Header.css"

import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem, OnOpenModalLogin, OnOpenModalSignUp, user, handleLogout, isVendorLogin
  ,setIsVendorLogin }) => {
  return (
    <>
      <Search
        OnOpenModalLogin={OnOpenModalLogin}
        OnOpenModalSignUp={OnOpenModalSignUp}
        CartItem={CartItem}
        user={user}
        handleLogout={handleLogout} 
        setIsVendorLogin={setIsVendorLogin}
        />
      <Navbar user={user} handleLogout={handleLogout} />
    </>
  )
}

export default Header
