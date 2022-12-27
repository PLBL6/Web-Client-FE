import axios from "axios"
import { useEffect, useLayoutEffect, useState } from "react"
import { URL_API_2 } from "../../../../url"
import UserOrderItemDetail from "./UserOrderItemDetail"

const UserOrderitem = ({ orderItem }) => {

    const [orderDetails, setOrderDetails] = useState()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getOrderDetailsByIdOrder = async () => {
            const data = await axios(URL_API_2 + `api/get-all-chi-tiet-donhangs-by-id-donhang?donHangID=${orderItem.id}`)
            setOrderDetails(data.data.chitietdonhangs)
            setLoading(false)

        }
        getOrderDetailsByIdOrder()
    }, [])

    return (
        < >
            {loading ? <div className="loading"></div> :
                <div className="order-item__list-product">
                    {orderDetails?.map((orderDetail, index) => (
                        <UserOrderItemDetail key={index} orderDetails={orderDetails} orderDetail={orderDetail} setOrderDetails={setOrderDetails} />
                    ))}
                </div>
            }
        </>
    )
}

export default UserOrderitem