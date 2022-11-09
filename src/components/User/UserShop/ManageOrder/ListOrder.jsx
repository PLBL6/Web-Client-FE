// import orderData from "../../../data/OrderData"

import Orderitem from "./OrderItem/OrderItem"

const ListOrder = () => {
    return (
        <div className="ListOrder-shop-section">
            <h1>123 Đơn hàng</h1>
            
            <Orderitem />
            <Orderitem />
            <Orderitem />

            
        </div>
    )
}

export default ListOrder