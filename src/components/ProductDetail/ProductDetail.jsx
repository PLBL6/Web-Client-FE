import { Rating } from "@mui/material";
import { borderColor } from "@mui/system";
import axios from "axios";
import { useLayoutEffect } from "react";
import { memo, useCallback, useEffect, useState } from "react";
import { URL_API } from "../../url";
import CategoryProductData from "../data/CategoryProductData";
import ColorData from "../data/ColorData";
import SizeData from "../data/SizeData";

import "./productDetail.css"
const ProductDetail = ({ addToCart }) => {

    const [checked, setChecked] = useState(0)

    const [product, setProduct] = useState()
    const [details, setDetails] = useState()

    const [vendorInfo, setVendorInfo] = useState()

    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(1)


    const increaseQuantity = useCallback(() => setQuantity(prev => prev + 1), [])
    const decreaseQuantity = useCallback(() => setQuantity(prev => {
        if (prev > 1) {
            return prev - 1
        }
        else return prev
    }), [])

    const handleMoveToTop = () => {
        document.documentElement.scrollTop = 0
    }
    useEffect(() => {
        handleMoveToTop()
    }, [])

    useEffect(() => {
        axios(URL_API + `api/get-nhacungcap-by-id-mathang?idMatHang=${localStorage.getItem("ProductIdDetail")}`)
            .then(res =>setVendorInfo(res.data.nhacungcap.NhaCungMatHangCapData))
    }, [])

    useEffect(() => {
        setLoading(true)
        const getProduct = async () => {
            const data = await axios(URL_API + `api/get-mathangs?idMatHang=${localStorage.getItem("ProductIdDetail")}`)
            setProduct(data.data.mathangs)
        }
        getProduct()
        setLoading(false)
    }, [])

    useEffect(() => {
        const getDetailsProduct = async () => {
            const data = await axios(URL_API + `api/get-all-chi-tiet-mathangs-by-id-mathang?matHangID=${localStorage.getItem("ProductIdDetail")}`)
            setDetails(data.data.chitietmathangs)
        }
        getDetailsProduct()
    }, [])

    const handleAddToCart = () => {
        if (!JSON.parse(localStorage.getItem("login"))?.token) {
            alert("Bạn chưa đăng nhập để sử dụng hệ thống")
        }
        else {
            addToCart({
                ...product,
                "qty": quantity,
                "detail": { ...details?.find(item => item.id === checked) },
                "nhaCungCap": {
                    "id": vendorInfo?.id,
                    "tenNguoiDung": vendorInfo?.tenNguoiDung,
                    "anhDaiDien": vendorInfo?.anhDaiDien
                }
            })

        }
    }
    // console.log("checked:", details?.find(item => item.id === checked));

    return (
        <div className="product-detail">
            <div className="product-detail__img" >
                <img src={product?.hinhAnh || "https://dxmvietnam.com/asset/images/no-image-found.png"} alt="san pham" />
            </div>
            <div className="product-detail__info">
                <h1 className="product-detail__name">{product?.tenMatHang}</h1>
                <ul className="product-detail__review-info">
                    <li className="product-detail__review-info__item product-detail__rating product-detail-separate">
                        <p className="product-detail__rating-value">2</p>
                        <div className="product-detail__rating__icon">
                            <Rating
                                defaultValue={3.0} precision={1}
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
                    <p className="product-detail__price-old">{product?.gia} VND</p>
                    <p className="product-detail__price-current">{Math.round(product?.gia * (100 - product?.khuyenMai) / 100)} VND</p>
                    <p className="product-detail__price-discount">{product?.khuyenMai}% GIẢM</p>
                </div>

                <ul className="product-detail__list-details">
                    <li className="product-detail__item">
                        <h3 className="product-detail__head">Danh Mục:</h3>
                        <p className="product-detail__value fs-18">{CategoryProductData[product?.danhMuc]?.cateName}</p>
                    </li>
                    <li className="product-detail__item">
                        <h3 className="product-detail__head">Loại hàng:</h3>
                        <div className="product-color product-detail__value">
                            {details?.map((detail, index) => (
                                <div className="product-type" key={index}>
                                    <input id={detail?.id} type="radio" value={detail?.id}
                                        onChange={() => setChecked(detail?.id)}
                                        checked={checked === detail?.id}
                                    />
                                    <label style={checked === detail?.id ? { borderColor: '#EB3251' } : {}}
                                        htmlFor={detail?.id}>{`${ColorData[detail?.maMS - 1]} - ${SizeData[detail?.maKC - 1]}`}</label>
                                </div>
                            ))}

                        </div>
                    </li>
                </ul>

                <div className="product-detail__quantity">
                    <h3 className="product-detail__quantity-name">Số lượng:</h3>
                    <div className="product-detail__quantity-input">
                        <div onClick={decreaseQuantity} className="btn-quantity-decrease"><i className="fa-sharp fa-solid fa-minus"></i></div>
                        <p className="quantity-input-value" >{quantity <= 0 ? 1 : quantity} </p>
                        <div onClick={increaseQuantity} className="btn-quantity-increase"><i className="fa-sharp fa-solid fa-plus"></i></div>
                    </div>
                </div>



                <div className="product-detail__handle">
                    <button onClick={handleAddToCart} className="product-detail__addtocart">
                        <i className="fa-sharp fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
                    </button>
                    <a className="product-detail__buy" href="/">Mua ngay</a>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail