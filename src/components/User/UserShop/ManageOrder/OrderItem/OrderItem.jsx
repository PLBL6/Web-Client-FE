const Orderitem = () => {
    return (
        <div className="order-item-section">
            <div className="order-item__user">
                <div className="order-item__user-info">
                    <img src="https://external-preview.redd.it/eSc0fxSx7OsHBKjmTCw5K4UZ-wf_8g0OiKSjTj86R2Q.jpg?auto=webp&s=072946ceb4a5bb7025cce0b33535d90e0aa50240" alt="" />
                    <p className="order-item__user-info-name">homnayla1ngaytuyetvoi</p>
                </div>
                <p className="order-item__status">ĐANG GIAO</p>
            </div>
            <div className="order-item__list-product">
                <div className="order-item__product">
                    <div className="order-item__info">
                        <img src="https://1.bp.blogspot.com/-MWpiekrll-g/YMW2vMk0CzI/AAAAAAAAtwo/6FwzorrofsML__bdshUQreQy0V1TPwdfgCNcBGAsYHQ/s0/mau-ao-nam.jpg" alt="" />
                        <div>
                            <p className="order-item__product-name">Áo phông đẹp</p>
                            <span>x1</span>
                        </div>
                    </div>
                    <p className="order-item-value">200.000đ</p>
                </div>

                <div className="order-item__product">
                    <div className="order-item__info">
                        <img src="https://1.bp.blogspot.com/-MWpiekrll-g/YMW2vMk0CzI/AAAAAAAAtwo/6FwzorrofsML__bdshUQreQy0V1TPwdfgCNcBGAsYHQ/s0/mau-ao-nam.jpg" alt="" />
                        <div>
                            <p className="order-item__product-name">Áo phông đẹp</p>
                            <span>x1</span>
                        </div>
                    </div>
                    <p className="order-item-value">200.000đ</p>
                </div>
                <div className="order-item__product">
                    <div className="order-item__info">
                        <img src="https://1.bp.blogspot.com/-MWpiekrll-g/YMW2vMk0CzI/AAAAAAAAtwo/6FwzorrofsML__bdshUQreQy0V1TPwdfgCNcBGAsYHQ/s0/mau-ao-nam.jpg" alt="" />
                        <div>
                            <p className="order-item__product-name">Áo phông đẹp</p>
                            <span>x1</span>
                        </div>
                    </div>
                    <p className="order-item-value">200.000đ</p>
                </div>
            </div>

            <div className="order-item__handle">
                <div className="order-item__total-price">
                    <p className="order-item__total-price-text">Tổng số tiền:</p>
                    <p className="order-item__total-price-value">600.000</p>
                </div>
                <button className="btn-primary order-item__handle-btn">GIAO HÀNG THÀNH CÔNG</button>
            </div>
        </div>
    )
}

export default Orderitem