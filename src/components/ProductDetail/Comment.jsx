import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { URL_API, URL_API_2 } from "../../url";


const Comment = () => {

    const [rating, setRating] = useState(0)
    const [reviews, setReviews] = useState()

    useEffect(() => {
        const getReviewsProduct = async () => {
            const data = await axios(URL_API_2 + `api/get-all-danhgias-by-id-mathang?matHangId=${localStorage.getItem("ProductIdDetail")}`)
            setReviews(data.data.danhgias)
        }
        getReviewsProduct()

    }, [])


    return (
        <div className="comment-section">
            <h1 className="comment-section__heading">Đánh giá sản phẩm</h1>
            <div className="comment-input-section">
                <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/03/Avatar-co-don.jpg" alt="avatar" className="comment-ava-user"></img>
                <div className="comment-input-wrap">
                    <input type="text" placeholder="Bạn có nhận xét gì về sản phẩm ..." />
                    <div className="rating-send-mess">
                        <div className="product-detail__rating__icon">
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                                size="large"
                                style={{ color: "#E94560" }}
                            />
                        </div>
                        <button className="btn-send-mess" type="">Bình luận</button>
                    </div>

                </div>
            </div>
            <ul className="list-comment">
                {reviews?.map((review, index) => (
                    <li key={index} className="comment-item">
                        <img className="comment-item__img comment-ava-user" src="https://thuthuatnhanh.com/wp-content/uploads/2022/03/Avatar-co-don.jpg" alt="avatar" />
                        <div className="comment-item__body">
                            <p className="comment-item__name">{review?.khachHang}</p>
                            <Rating
                                defaultValue={review?.xepHang}
                                readOnly
                                style={{ color: "#E94560" }}
                                size="small"
                            />
                            <p className="comment-item__content">{review?.noiDung}</p>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Comment