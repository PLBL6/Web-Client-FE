import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const CardProduct = ({ shopItems, addToCart }) => {
    return (
        <Link to={`/product/${shopItems.id}`} className='box cartProduct '>
            <div className='product mtop'>
                <div className='product-img' style={{ backgroundImage: `url(${shopItems.images[0]})` }}>
                    <span className='discount'>{shopItems.discountPercentage}% Off</span>
                </div>
                <div className='product-details'>
                    <h3>{shopItems.title}</h3>
                    <div className='price'>
                        <div>
                            <h4 className="price-old">${shopItems.price}</h4>
                            <h4>${Math.ceil(shopItems.price * shopItems.discountPercentage / 100)} </h4>
                        </div>
                        {/* <button className="btn-addToCart" onClick={(e) => { addToCart(shopItems); e.stopPropagation() }}>
                            <i className='fa fa-plus'></i>
                        </button> */}
                        <Rating
                            defaultValue={4.5} precision={0.5}
                            readOnly
                            style={{ color: "#E94560" }}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardProduct