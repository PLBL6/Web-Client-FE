import { Rating } from "@mui/material";
import { useState } from "react";

const Comment = () => {

    const [rating, setRating] = useState(0)

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
                <li className="comment-item">
                    <img className="comment-item__img comment-ava-user" src="https://thuthuatnhanh.com/wp-content/uploads/2022/03/Avatar-co-don.jpg" alt="avatar" />
                    <div className="comment-item__body">
                        <p className="comment-item__name">tntntntn</p>
                        <Rating
                            defaultValue={4}
                            readOnly
                            style={{ color: "#E94560" }}
                            size="small"
                        />
                        <p className="comment-item__content">Test Comment</p>
                    </div>
                </li>
                <li className="comment-item">
                    <img className="comment-item__img comment-ava-user" src="https://thuthuatnhanh.com/wp-content/uploads/2022/03/Avatar-co-don.jpg" alt="avatar" />
                    <div className="comment-item__body">
                        <p className="comment-item__name">tntntntn</p>
                        <Rating
                            defaultValue={5}
                            readOnly
                            style={{ color: "#E94560" }}
                            size="small"
                        />
                        <p className="comment-item__content">Test Comment Test Comment Test Comment Test Comment Test Comment</p>
                    </div>
                </li>
                <li className="comment-item">
                    <img className="comment-item__img comment-ava-user" src="https://thuthuatnhanh.com/wp-content/uploads/2022/03/Avatar-co-don.jpg" alt="avatar" />
                    <div className="comment-item__body">
                        <p className="comment-item__name">tntntntn</p>
                        <Rating
                            defaultValue={3}
                            readOnly
                            style={{ color: "#E94560" }}
                            size="small"
                        />
                        <p className="comment-item__content">123121111111 </p>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Comment