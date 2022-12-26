import { memo } from "react"
import OrderItemDetail from "./OrderItemDetail"

const Orderitem = ({ order, ordersByUser, setOrdersByUser }) => {
    return (
        <div className="order-item-section">
            <div className="order-item__user">
                <div className="order-item__user-info">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={order.khachHang.avatar || "https://dxmvietnam.com/asset/images/no-image-found.png"} alt="" />
                            <p className="order-item__user-info-name">{order.khachHang.nameCustomer}</p>
                        </div>
                        <p><span style={{color:`var(--primary)`}}>SDT:</span> {order.khachHang.phoneNumber}</p>
                    </div>
                    <p><span style={{color:`var(--primary)`, marginLeft: "12px"}}>Địa chỉ:</span> {order.khachHang.address}</p>
                </div>
            </div>
            <div className="order-item__list-product">
                {order.order.map((item, index) => (
                    <OrderItemDetail key={index} ordersByUser={ordersByUser} orderDetail={item} setOrdersByUser={setOrdersByUser} />
                ))}
            </div>
        </div>
    )
}

export default memo(Orderitem)