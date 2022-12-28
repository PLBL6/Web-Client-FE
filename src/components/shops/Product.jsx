import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const Product = ({ shopItems }) => {

    const SaveIdDetailProduct = (id) => {
        localStorage.setItem("ProductIdDetail", id)
    }

    return (
        <Link onClick={() => SaveIdDetailProduct(shopItems?.id)} to={`/product/${shopItems?.id}`} >
            <div className='product product-bg m-0 mb-10'>
                <div>
                    <span className='discount'>{shopItems.khuyenMai}% Off</span>
                    {/* <img className="product-img" src={shopItems.images[0]} alt='' /> */}
                    <div className="product-img" style={{ backgroundImage: `url(${shopItems.hinhAnh})` }}></div>
                    {/* style={{width: "100%", height: "100%", borderTopLeftRadius:"8px", borderTopRightRadius:"8px"}} */}
                </div>
                <div className='product-details'>
                    <h3>{shopItems.tenMatHang}</h3>
                    <div className='price'>
                        <div>
                            <h4 className="price-old">{shopItems.gia}$</h4>
                            <h4>{Math.ceil(shopItems.gia * shopItems.khuyenMai)}$ </h4>

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
        </Link>
    )
}

export default Product