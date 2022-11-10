import { useEffect } from "react"
import UserOrderitem from "./UserOrderitem"

const UserOrder = () => {

    useEffect(() => {
        const inputSeach = document.querySelector(".order-search__input")
        const searchIcon = document.querySelector(".order-search__icon")
        inputSeach.onfocus = () => {
            searchIcon.style.color = "#666"
        }
        inputSeach.onblur = () => {
            searchIcon.style.color = "#bbb"
        }
        
    }, [])
    return (
        <>
            <div className="order-search-wrapper">
                <div className="order-search">
                    <i className="order-search__icon fa-solid fa-magnifying-glass mr12"></i>
                    <input className="order-search__input" type="text" placeholder="Tìm kiếm theo Tên sản phẩm" />

                </div>
                <button className="btn-primary">TÌM</button>
            </div>
            <UserOrderitem status="ĐANG CHUẨN BỊ HÀNG" />
            <UserOrderitem status="ĐANG gIAO" />
            <UserOrderitem status="ĐÃ GIAO" />
            <UserOrderitem status="ĐÃ HỦY" />
        </>
    )
}

export default UserOrder