import Cart from "../common/Cart/Cart"

const CartPage = ({ CartItem, addToCart, decreaseQty, removeCartItem , setCartItem }) => {
    return (
        <Cart CartItem={CartItem} setCartItem={setCartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeCartItem={removeCartItem} />
    )
}

export default CartPage