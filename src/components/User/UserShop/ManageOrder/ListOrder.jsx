// import orderData from "../../../data/OrderData"

import axios from "axios"
import { memo } from "react"
import { useEffect, useState } from "react"
import { filterByCustomer } from "../../../../filterByCustomer"
import { URL_API_2 } from "../../../../url"
import Orderitem from "./OrderItem/OrderItem"

const ListOrder = ({orders, ordersByUser, setOrdersByUser, loading}) => {
    // const [orders, setOrders] = useState()
    // const [ordersByUser, setOrdersByUser] = useState()
    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     const getOrderShop = async () => {
    //         const data = await axios(URL_API_2 + `api/get-all-donhangs-by-id-nhacungcap?nhaCungCapId=${JSON.parse(localStorage.getItem("login")).user.id}`)
    //         console.log(data.data.chitietdonhangs);
    //         setOrdersByUser(filterByCustomer(data.data.chitietdonhangs))
    //         setOrders(data.data.chitietdonhangs)
    //         setLoading(false)
    //     }
    //     getOrderShop()
    // }, [])

    // console.log("ordersByUser:", ordersByUser);

    return (
        <div className="ListOrder-shop-section">

            {loading ? <div className="loading"></div>
                :
                <>
                    <h1 className="text-primary">{orders?.length} đơn hàng</h1>
                    {ordersByUser?.map((item, index) => (
                        <Orderitem key={index} ordersByUser={ordersByUser} order={item} setOrdersByUser={setOrdersByUser} />
                    ))}
                </>
            }
        </div>
    )
}

export default memo(ListOrder)