import React from "react"
import "./Header.css"

import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem, OnOpenModalLogin, OnOpenModalSignUp }) => {
  return (
    <>
      <Search OnOpenModalLogin={OnOpenModalLogin} OnOpenModalSignUp={OnOpenModalSignUp} CartItem={CartItem} />
      <Navbar />
    </>
  )
}

export default Header
