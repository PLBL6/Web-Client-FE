import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { URL_API } from "../../../../url";

const ListProductShop = ({ products, categoryByShop, loadingProducts }) => {
    console.log("products:", products);
    const [category, setCategory] = useState('');
    const [query, setQuery] = useState("")
    const [filteredProduct, setFilteredProduct] = useState(() => {
        return products
    })
    console.log("filteredProduct:", filteredProduct);
    // console.log(products);

    // const filteredProduct = useMemo(() => {
    //     return products?.filter(item => (
    //         (item?.tenMatHang).toLowerCase().includes(query.toLowerCase())
    //     ))
    // }, [query])

    const handleSearch = () => {
        setFilteredProduct(
            products.filter(item => {
                return item?.tenMatHang?.toLowerCase().includes(query.toLowerCase())
            })
        )

    }


    return (
        <div className="shop-product-section">
            <div className="search-product-section">
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Tên sản phẩm</label>
                    <input type="search" className="form-control" value={query} onChange={e => setQuery(e.target.value)} />
                </div>
                <div className="form-group form-group-handle">
                    <label className="form-label" htmlFor="category">Mặt hàng</label>
                    <Box sx={{ width: 300 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Mặt hàng</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="category"
                                value={category}
                                onChange={(e) => { setCategory(e.target.value) }}
                            >
                                {categoryByShop?.map(item => (
                                    <MenuItem key={item.id} value={item.id}>{item.tenDanhMuc}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <button onClick={() => handleSearch()} className="btn-primary">Tìm</button>

            </div>

            {loadingProducts ? <div className="loading"></div> :
                <div className="list-product-section" style={{ maxHeight: "500px", overflowY: "scroll" }}>
                    <h3>{products?.length} sản phẩm</h3>
                    <table className="table-product table"  >
                        <thead>
                            <tr>
                                <td>Tên sản phẩm</td>
                                <td className="text-center">Loại hàng</td>
                                <td className="text-center">Giá</td>
                                {/* <td>Kho hàng</td> */}
                                <td className="text-center">Khuyến mãi</td>
                                {/* <td>Doanh số</td> */}
                                <td>Thao tác</td>
                            </tr>
                        </thead>
                        <tbody >
                            {filteredProduct?.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="table-product__name">
                                            <img className="table-product__img" src={item?.hinhAnh} alt="" />
                                            <p className="table-product__text">{item?.tenMatHang}</p>
                                        </div>
                                    </td>
                                    <td className="text-center">{item?.danhMuc}</td>
                                    <td className="text-center">{item?.gia} $</td>
                                    <td className="text-center">{item?.khuyenMai}</td>
                                    {/* <td>30</td> */}
                                    <td className="handle-row">
                                        <a className="link" href="/">Cập nhật</a>
                                        <a className="link" href="/">Xem chi tiết</a>
                                        <a className="link" href="/">Xóa</a>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default ListProductShop