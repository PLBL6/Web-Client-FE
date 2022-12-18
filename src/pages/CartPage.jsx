import Cart from "../common/Cart/Cart"

const CartPage = ({ CartItem, addToCart, decreaseQty, removeCartItem }) => {
    return (
        <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeCartItem={removeCartItem} />
    )
}

export default CartPage