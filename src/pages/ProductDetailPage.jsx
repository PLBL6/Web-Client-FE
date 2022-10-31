import Comment from "../components/ProductDetail/Comment"
import ProductDetail from "../components/ProductDetail/ProductDetail"

const ProductDetailPage = () => {
    return (
        <div className="product-details-wrapper" >
            <ProductDetail />
            <Comment />
        </div>
    )
}

export default ProductDetailPage