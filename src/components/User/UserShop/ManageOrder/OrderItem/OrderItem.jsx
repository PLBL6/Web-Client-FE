import OrderItemDetail from "./OrderItemDetail"

const Orderitem = ({ order }) => {
    return (
        <div className="order-item-section">
            <div className="order-item__user">
                <div className="order-item__user-info">
                    <img src={order.khachHang.avatar || "https://dxmvietnam.com/asset/images/no-image-found.png"} alt="" />
                    <p className="order-item__user-info-name">{order.khachHang.nameCustomer}</p>
                </div>
                {/* <p className="order-item__status">ĐANG GIAO</p> */}
            </div>
            <div className="order-item__list-product">
                {order.order.map((item, index) => (
                    <OrderItemDetail key={index} orderDetail={item} />
                ))}
            </div>

            {/* <div className="order-item__handle">
                <button className="btn-primary order-item__handle-btn">GIAO HÀNG THÀNH CÔNG</button>
            </div> */}
        </div>
    )
}

export default Orderitem