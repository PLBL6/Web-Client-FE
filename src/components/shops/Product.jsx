const Product = () => {
    return (
        <div className='product product-bg'>
            <div className='img'>
                <span className='discount'>50% Off</span>
                <img style={{width: "100%", height: "100%"}} className="img" src="https://cf.shopee.vn/file/119c8c8d5ea3673710e887fd48fa1c3f" alt='' />
                <div className='product-like'>
                    <label></label> <br />
                    <i className='fa-regular fa-heart'></i>
                </div>
            </div>
            <div className='product-details'>
                <h3>Name</h3>
                <div className='price'>
                    <div>
                        <h4 className="price-old"> $400</h4>
                        <h4>$200.00 </h4>
                    </div>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                </div>
            </div>
        </div>
    )
}

export default Product