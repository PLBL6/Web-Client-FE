import React from "react"
import "./Header.css"

import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem, OnOpenModalLogin, OnOpenModalSignUp, user, handleLogout }) => {
  return (
    <>
      <Search OnOpenModalLogin={OnOpenModalLogin} OnOpenModalSignUp={OnOpenModalSignUp} CartItem={CartItem} user={user} handleLogout={handleLogout} />
      <Navbar user={user} handleLogout={handleLogout}/>
    </>
  )
}

export default Header
