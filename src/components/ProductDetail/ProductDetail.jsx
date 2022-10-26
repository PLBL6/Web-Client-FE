import "./productDetail.css"
const ProductDetail = () => {
    return (
        <div className="product-detail">
            <div className="product-detail__img">
            </div>
            <div className="product-detail__info">
                <h1 className="product-detail__name">Iphone 14 Pro Max</h1>
                <ul className="product-detail__review-info">
                    <li className="product-detail__review-info__item product-detail__rating product-detail-separate">
                        <p className="product-detail__rating-value">4.8</p>
                        <div className="product-detail__rating__icon">
                            <i className="fa-solid fa-star rating--active"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </li>
                    <li className="product-detail__review-info__item product-detail-separate">
                        <p className="product-detail__review">43 Đánh giá</p>
                    </li>
                    <li className="product-detail__review-info__item">
                        <p className="product-detail__sold">184 Đã bán</p>
                    </li>


                </ul>

                <div className="product-detail__price">
                    <p className="product-detail__price-old">529.000đ</p>
                    <p className="product-detail__price-current">156.000đ</p>
                    <p className="product-detail__price-discount">60% GIẢM</p>
                </div>

                <ul className="product-detail__list-details">
                    <li className="product-detail__item">
                        <h3 className="product-detail__head">Property:</h3>
                        <p className="product-detail__value">Value</p>
                    </li>
                    <li className="product-detail__item">
                        <h3 className="product-detail__head">Property:</h3>
                        <p className="product-detail__value">Value</p>
                    </li>
                    <li className="product-detail__item">
                        <h3 className="product-detail__head">Property:</h3>
                        <p className="product-detail__value">Value</p>
                    </li>
                    <li className="product-detail__item">
                        <h3 className="product-detail__head">Property:</h3>
                        <p className="product-detail__value">Value</p>
                    </li>
                </ul>

                <div className="product-detail__quantity">
                    <h3 className="product-detail__quantity-name">Số lượng:</h3>
                    <div className="product-detail__quantity-input">
                        <div className="btn-quantity-decrease"><i className="fa-sharp fa-solid fa-minus"></i></div>
                        <p className="quantity-input-value">1</p>
                        <div className="btn-quantity-increase"><i className="fa-sharp fa-solid fa-plus"></i></div>
                    </div>
                </div>



                <div className="product-detail__handle">
                    <button className="product-detail__addtocart">
                        <i className="fa-sharp fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
                    </button>
                    <a className="product-detail__buy" href="/">Mua ngay</a>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail