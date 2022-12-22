// import orderData from "../../../data/OrderData"

import axios from "axios"
import { useEffect, useState } from "react"
import { filterByCustomer } from "../../../../filterByCustomer"
import { URL_API_2 } from "../../../../url"
import Orderitem from "./OrderItem/OrderItem"

const ListOrder = () => {
    const [orders, setOrders] = useState()
    const [ordersByUser, setOrdersByUser] = useState()
    useEffect(() => {
        const getOrderShop = async () => {
            const data = await axios(URL_API_2 + `api/get-all-donhangs-by-id-nhacungcap?nhaCungCapId=${JSON.parse(localStorage.getItem("login")).user.id}`)
            // console.log(data.data.donhangs);
            // console.log("ordersByUser:", ordersByUser);
            setOrdersByUser(filterByCustomer(data.data.donhangs))
            setOrders(data.data.donhangs)
        }
        getOrderShop()
    }, [])

    // const ordersByUser = filterByCustomer(orders)
    console.log(ordersByUser);
    return (
        <div className="ListOrder-shop-section">
            <h1>{orders?.length} đơn hàng</h1>

            {ordersByUser?.map((item, index) => (
                <Orderitem key={index} order={item} />
            ))}

            {/* <Orderitem />
            <Orderitem />
            <Orderitem /> */}


        </div>
    )
}

export default ListOrder