import axios from "axios"
import { useEffect, useLayoutEffect, useState } from "react"
import { URL_API_2 } from "../../../../url"
import UserOrderitem from "./UserOrderitem"

const UserOrder = () => {

    const [orders, setOrders] = useState()

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

    useEffect(() => {
        const getOrderByIdUser = async () => {
            const data = await axios(URL_API_2 + `api/get-all-donhangs-by-id-khachhang?khachHangID=${JSON.parse(localStorage.getItem("login")).user.id}`)
            setOrders(data.data.donhangs)
            sessionStorage.setItem("Orders", JSON.stringify(data.data.donhangs))
        }
        setTimeout(() => {
            getOrderByIdUser()
        }, 1000);
    }, [])

    console.log("orders:", orders);

    return (
        <>
            <div className="order-search-wrapper">
                <div className="order-search">
                    <i className="order-search__icon fa-solid fa-magnifying-glass mr12"></i>
                    <input className="order-search__input" type="text" placeholder="Tìm kiếm theo Tên sản phẩm" />

                </div>
                <button className="btn-primary">TÌM</button>
            </div>
            <div className="order-item-section">
                {orders?.map((order, index) => (
                    <div key={index}>
                        <div className="order-item__user">
                            <div className="order-item__user-info">
                                <p className="order-item__datetime">{order?.createdAt}</p>
                            </div>
                            <p className="order-item__status"></p>
                        </div>
                        <UserOrderitem orderItem={order} />
                    </div>
                ))}
                <div className="order-item__handle">
                    <div className="order-item__total-price">
                        <p className="order-item__total-price-text">Tổng số tiền:</p>
                        <p className="order-item__total-price-value">{orders?.tongTien}</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default UserOrder