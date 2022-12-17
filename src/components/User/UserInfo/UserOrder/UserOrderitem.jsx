import axios from "axios"
import { useEffect, useLayoutEffect, useState } from "react"
import { URL_API_2 } from "../../../../url"
import UserOrderItemDetail from "./UserOrderItemDetail"

const UserOrderitem = ({ orderItem }) => {

    const [orderDetails, setOrderDetails] = useState()

    useEffect(() => {
        const getOrderDetailsByIdOrder = async () => {
            const data = await axios(URL_API_2 + `api/get-all-chi-tiet-donhangs-by-id-donhang?donHangID=${orderItem.id}`)
            setOrderDetails(data.data.chitietdonhangs)
        }
        setTimeout(() => {
            getOrderDetailsByIdOrder()
        }, 0)

    }, [])

    return (
        < >
            <div className="order-item__list-product">
                {orderDetails?.map((orderDetail, index) => (
                    <UserOrderItemDetail key={index} orderDetail={orderDetail} />
                ))}
            </div>
        </>
    )
}

export default UserOrderitem