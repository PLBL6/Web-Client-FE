import { Rating } from "@mui/material";
import axios from "axios";
import { memo, useCallback, useEffect, useState } from "react";

import "./productDetail.css"
const ProductDetail = ({ id }) => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = useCallback(() => setQuantity(prev => prev+1), [])
    const decreaseQuantity = useCallback(() => setQuantity(prev => {
        if (prev > 1) {
            return prev - 1
        } 
        else return prev
    }), [])


    useEffect(() => {
        setLoading(true)
        const getProduct = async () => {
            const data = await axios(`https://dummyjson.com/products/1`)
            setProduct(data.data)
    }

        getProduct()
        
        
        setLoading(false)
    }, [])

    

    return (
        <div className="product-detail">
            <div className="product-detail__img" >
                <img src={product?.images[0]} alt="" />
            </div>
            <div className="product-detail__info">
                <h1 className="product-detail__name">{product?.title}</h1>
                <ul className="product-detail__review-info">
                    <li className="product-detail__review-info__item product-detail__rating product-detail-separate">
                        <p className="product-detail__rating-value">{product?.rating}</p>
                        <div className="product-detail__rating__icon">
                            <Rating
                                defaultValue={Math.round(product?.rating)} precision={1}
                                readOnly
                                style={{ color: "#E94560" }}
                            />
                        </div>
                    </li>
                    <li className="product-detail__review-info__item product-detail-separate">
                        <p className="product-detail__review">43 Đánh giá</p>
                    </li>
                    <li className="product-detail__review-info__item">
                        <p className="product-detail__sold">{product?.stock} Đã bán</p>
                    </li>


                </ul>

                <div className="product-detail__price">
                    <p className="product-detail__price-old">{product?.price}$</p>
                    <p className="product-detail__price-current">{Math.round(product?.price * (100-product?.discountPercentage)/100) }$</p>
                    <p className="product-detail__price-discount">{product?.discountPercentage} GIẢM</p>
                </div>

                <ul className="product-detail__list-details">
                    <li className="product-detail__item">
                        <h3 className="product-detail__head">Danh Mục:</h3>
                        <p className="product-detail__value">{ product?.category}</p>
                    </li>
                    <li className="product-detail__item">
                        <h3 className="product-detail__head">Màu sắc:</h3>
                        <p className="product-detail__value">Đen</p>
                    </li>
                    <li className="product-detail__item">
                        <h3 className="product-detail__head">Kích cỡ:</h3>
                        <p className="product-detail__value">Size S</p>
                    </li>
                    <li className="product-detail__item">
                        <h3 className="product-detail__head">Khuyến mãi:</h3>
                        <p className="product-detail__value">{product?.discountPercentage}%</p>
                    </li>
                </ul>

                <div className="product-detail__quantity">
                    <h3 className="product-detail__quantity-name">Số lượng:</h3>
                    <div className="product-detail__quantity-input">
                        <div onClick={decreaseQuantity} className="btn-quantity-decrease"><i className="fa-sharp fa-solid fa-minus"></i></div>
                        <p className="quantity-input-value" >{quantity<=0 ? 1 : quantity} </p>
                        <div onClick={increaseQuantity} className="btn-quantity-increase"><i className="fa-sharp fa-solid fa-plus"></i></div>
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

export default memo(ProductDetail)