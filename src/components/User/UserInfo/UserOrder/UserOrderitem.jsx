const UserOrderitem = ({ status }) => {
    return (
        <div className="order-item-section">
            <div className="order-item__user">
                <div className="order-item__user-info">
                    <p className="order-item__datetime">22:10 24-10-2022</p>
                </div>
                <p className="order-item__status">{status}</p>
            </div>
            <div className="order-item__list-product">
                <div className="order-item__product">
                    <div className="order-item__info">
                        <img src="https://1.bp.blogspot.com/-MWpiekrll-g/YMW2vMk0CzI/AAAAAAAAtwo/6FwzorrofsML__bdshUQreQy0V1TPwdfgCNcBGAsYHQ/s0/mau-ao-nam.jpg" alt="" />
                        <div>
                            <p className="order-item__product-name">Áo thun thể thao nam DECATHLON run dry chuyên chạy bộ, nhanh khô</p>
                            <span>x1</span>
                            <p className="order-item-shop">Shop abcxyz</p>
                        </div>
                    </div>
                    <p className="order-item-value">200.000đ</p>
                </div>

                <div className="order-item__product">
                    <div className="order-item__info">
                        <img src="https://1.bp.blogspot.com/-MWpiekrll-g/YMW2vMk0CzI/AAAAAAAAtwo/6FwzorrofsML__bdshUQreQy0V1TPwdfgCNcBGAsYHQ/s0/mau-ao-nam.jpg" alt="" />
                        <div>
                            <p className="order-item__product-name">Áo thun thể thao nam DECATHLON run dry chuyên chạy bộ, nhanh khô Áo thun thể thao nam DECATHLON run dry chuyên chạy bộ, nhanh khô</p>
                            <span>x1</span>
                            <p className="order-item-shop">Shop abcxyz</p>
                        </div>
                    </div>
                    <p className="order-item-value">200.000đ</p>
                </div>

            </div>

            <div className="order-item__handle">
                <div className="order-item__total-price">
                    <p className="order-item__total-price-text">Tổng số tiền:</p>
                    <p className="order-item__total-price-value">400.000</p>
                </div>
                <div className="order-item-button">
                    <button className="btn-primary">MUA LẠI</button>
                    {status === "ĐANG CHUẨN BỊ HÀNG" ? <button className="btn-secondary ml12">HỦY ĐƠN</button> : ""}
                </div>
            </div>
        </div>
    )
}

export default UserOrderitem