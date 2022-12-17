import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const CardProduct = ({ shopItems }) => {

    const SaveIdDetailProduct = (id) => {
        localStorage.setItem("ProductIdDetail", id)
    }
    return (
        <Link onClick={() => SaveIdDetailProduct(shopItems?.id)} to={`/product/${shopItems?.id}`} className='box cartProduct '>
            <div className='product mtop .product-bg'>
                <div className='product-img' style={shopItems?.hinhAnh ?
                    { backgroundImage: `url(${shopItems?.hinhAnh})` } : { backgroundImage: `url(https://dxmvietnam.com/asset/images/no-image-found.png)` }}
                >
                    <span className='discount'>{shopItems?.khuyenMai}% Off</span>
                </div>
                <div className='product-details'>
                    <h3>{shopItems?.tenMatHang}</h3>
                    <div className='price'>
                        <div>
                            <h4 className="price-old">${shopItems?.gia}</h4>
                            <h4>${Math.ceil(shopItems?.gia * shopItems?.khuyenMai / 100)} </h4>
                        </div>
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