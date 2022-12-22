import { Link } from "react-router-dom"
import ColorData from "../../components/data/ColorData"
import SizeData from "../../components/data/SizeData"

const CartShopItem = ({ item, addToCart, decreaseQty, removeCartItem }) => {
    return (
        <div className="cart-shop__list-items">
            <ul className="cart-shop__list-prop">
                <li className="cart-shop__item__prop">
                    <img className="cart-item-img" src={item.hinhAnh} alt="" />
                    <div>
                        <p className="cart-item-name">{item.tenMatHang}</p>
                        <p>{`Màu: ${ColorData[item.detail.maMS - 1]} - Size: ${SizeData[item.detail.maKC - 1]}`}</p>
                        <p className="cart-item-shop-name"></p>
                    </div>
                </li>
                <li className="cart-shop__item__prop f_flex_center handle_over_flow">
                    <p className="cart-item-price">{item.gia} đ</p>
                    <p className="cart-item-price-current">{item.gia * (100 - item.khuyenMai) / 100} $</p>
                </li>
                <li className="cart-shop__item__prop f_flex_center">
                    <div className="quantity-input">
                        <div onClick={() => decreaseQty(item)} className="btn-quantity-decrease"><i className="fa-sharp fa-solid fa-minus"></i></div>
                        <p className="quantity-input-value">{item.qty}</p>
                        <div onClick={() => addToCart(item)} className="btn-quantity-increase"><i className="fa-sharp fa-solid fa-plus"></i></div>
                    </div>
                </li>
                <li className="cart-shop__item__prop f_flex_center handle_over_flow">
                    <p className="cart-item-total-price">{(item.gia * (100 - item.khuyenMai) / 100) * item.qty} $</p>
                </li>
                <li className="cart-shop__item__prop f_flex_center">
                    <Link onClick={() => removeCartItem(item)} className="cart-item-handle" >Xóa</Link>
                </li>
            </ul>
        </div>
    )
}

export default CartShopItem