import React from "react"
import "./style.css"
import Shop from "./Shop"

const ListShop = (list) => {

    return (
        list.map((item) => {
            return <Shop
                nameShop={item.nameShop}
                addToCart={item.addToCart}
                shopItems={item.shopItems}
            />
        })
    )
}