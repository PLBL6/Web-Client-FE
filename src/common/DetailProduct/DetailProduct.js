import React from "react";
import './style.css'
import image from "../../assets/images/shops-1.png"
import {toast} from 'react-toastify';
//class="product-tumb" class="imageChange"

class DetailProduct extends React.Component {

    handleAddToCart = () => {
        toast.success("Add Success")
    }

    render() {
        return(
            <>
                <div class="product-card">
                    <div class="flex-container">
                        <div class="badge">Hot</div>
                        <div class="imageChange"> 
                            <img src={image} alt='' />
                        </div>
                        <div class="product-details">
                            <span class="product-catagory">Tai nghe, loa</span>
                            <h3><a href="">TAI NGHE X3 BASS</a></h3>
                            <div class="stars">
                                <input class="star star-5" id="star-5" type="radio" name="star"/>
                                <label class="star star-5" for="star-5"></label>
                                <input class="star star-4" id="star-4" type="radio" name="star"/>
                                <label class="star star-4" for="star-4"></label>
                                <input class="star star-3" id=" star-3" type="radio" name="star"/>
                                <label class="star star-3" for="star-3"></label>
                                <input class="star star-2" id="star-2" type="radio" name="star"/>
                                <label class="star star-2" for="star-2"></label>
                                <input class="star star-1" id="star-1" type="radio" name="star"/>
                                <label class="star star-1" for="star-1"></label>
                            </div>
                            
                            <p>Tai nghe chất lượng cao, giá thành tốt!</p>

                            <div class="product-bottom-details">
                                <div class="product-price"><small>230.000 đồng</small><br/>99.000 đồng</div>
                                <div class="product-links">
                                    <a href=""><i class="fa fa-heart"></i></a>
                                    <a href=""><i class="fa fa-shopping-cart"></i></a>
                                </div>
                                <button class="snip1582" onClick={() => this.handleAddToCart()}>Thêm vào giỏ</button>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DetailProduct