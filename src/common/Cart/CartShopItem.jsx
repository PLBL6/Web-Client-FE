const CartShopItem = () => {
    return (
        <div className="cart-shop__list-items">
            <ul className="cart-shop__list-prop">
                <li className="cart-shop__item__prop">
                    <img className="cart-item-img" src="https://cf.shopee.vn/file/02f965d1b9db443510fad9ddd9660b92" alt="" />
                    <div>
                        <p className="cart-item-name">Áo phông cho ngày trời mát mẻ</p>
                        <p className="cart-item-shop-name">Shop apple</p>
                    </div>
                </li>
                <li className="cart-shop__item__prop f_flex_center handle_over_flow">
                    <p className="cart-item-price">90.000đ</p>
                    <p className="cart-item-price-current">90.000đ</p>
                </li>
                <li className="cart-shop__item__prop f_flex_center">
                    <div className="quantity-input">
                        <div className="btn-quantity-decrease"><i className="fa-sharp fa-solid fa-minus"></i></div>
                        <p className="quantity-input-value">1</p>
                        <div className="btn-quantity-increase"><i className="fa-sharp fa-solid fa-plus"></i></div>
                    </div>
                </li>
                <li className="cart-shop__item__prop f_flex_center handle_over_flow">
                    <p className="cart-item-total-price">90.000đ</p>
                </li>
                <li className="cart-shop__item__prop f_flex_center">
                    <a className="cart-item-handle" href="/">Xóa</a>
                </li>
            </ul>
        </div>
    )
}

export default CartShopItem