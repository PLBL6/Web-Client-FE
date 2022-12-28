import Comment from "../components/ProductDetail/Comment"
import ProductDetail from "../components/ProductDetail/ProductDetail"

const ProductDetailPage = ({ CartItem, addToCart }) => {
    return (
        <div className="product-details-wrapper" >
            <ProductDetail CartItem={CartItem} addToCart={addToCart} />
            <Comment />
        </div>
    )
}

export default ProductDetailPage