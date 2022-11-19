import { Rating } from "@mui/material";

const Product = ({ shopItems }) => {
    return (
        <div className='product product-bg' style={{ margin: 0 }}>
            <div>
                <span className='discount'>{shopItems.discountPercentage}% Off</span>
                {/* <img className="product-img" src={shopItems.images[0]} alt='' /> */}
                <div className="product-img" style={{ backgroundImage: `url(${shopItems.images[0]})` }}></div>
                {/* style={{width: "100%", height: "100%", borderTopLeftRadius:"8px", borderTopRightRadius:"8px"}} */}
            </div>
            <div className='product-details'>
                <h3>{shopItems.title}</h3>
                <div className='price'>
                    <div>
                        <h4 className="price-old">{shopItems.price}$</h4>
                        <h4>{Math.ceil(shopItems.price * shopItems.discountPercentage)}$ </h4>

                    </div>
                    <Rating
                        defaultValue={4.5} precision={0.5}
                        readOnly
                        size="small"
                        style={{ color: "#E94560" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Product