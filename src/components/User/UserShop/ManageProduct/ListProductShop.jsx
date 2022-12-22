import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import { URL_API } from "../../../../url";

const ListProductShop = () => {
    const [category, setCategory] = useState('');

    const [products, getProducts] = useState();

    useEffect(() => {
        const GetAllProduct = async () => {
            const data = await axios(URL_API + `api/get-all-mathangs-by-id-nhacungcap?nhaCungCapId=${JSON.parse(localStorage.getItem("login")).user.id}`)
            getProducts(data.data.mathangs)
        }
        GetAllProduct()
    }, [])

    console.log("Product of Vendor:", products);

    return (
        <div className="shop-product-section">
            <div className="search-product-section">
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Tên sản phẩm</label>
                    <input type="text" className="form-control" />
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
                                <MenuItem value={1}>Quần Áo</MenuItem>
                                <MenuItem value={2}>Giày dép</MenuItem>
                                <MenuItem value={3}>Phụ kiện</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <button className="btn-primary">Tìm</button>

            </div>

            <div className="list-product-section" style={{maxHeight:"500px", overflowY:"scroll"}}>
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
                        {products?.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="table-product__name">
                                        <img className="table-product__img" src={item?.hinhAnh} alt="" />
                                        <p className="table-product__text">{item?.tenMatHang}</p>
                                    </div>
                                </td>
                                <td  className="text-center">{item?.danhMuc}</td>
                                <td  className="text-center">{item?.gia}VND</td>
                                <td  className="text-center">{item?.khuyenMai}</td>
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
        </div>
    )
}

export default ListProductShop