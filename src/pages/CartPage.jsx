import Cart from "../common/Cart/Cart"

const CartPage = ({ CartItem, addToCart, decreaseQty }) => {
    return (
        <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
    )
}

export default CartPage