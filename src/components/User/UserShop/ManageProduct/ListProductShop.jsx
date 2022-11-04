import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react";

const ListProductShop = () => {

    const [category, setCategory] = useState('');

    return (
        <>
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

            <div className="list-product-section">
                <h3>4 sản phẩm</h3>
                <table className="table-product table">
                    <thead>
                        <th>Tên sản phẩm</th>
                        <th>Loại hàng</th>
                        <th>Giá</th>
                        <th>Kho hàng</th>
                        <th>Doanh số</th>
                        <th>Thao tác</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="table-product__name">
                                    <img className="table-product__img" src="https://product.hstatic.net/200000053174/product/10_b6e996b6d9b249728ce9e760a0069b61_master.jpg" alt="" />
                                    <p className="table-product__text">Áo phông</p>
                                </div>
                            </td>
                            <td>Áo quần</td>
                            <td>1000$</td>
                            <td>100</td>
                            <td>30</td>
                            <td className="handle-row">
                                <a className="link" href="/">Cập nhật</a>
                                <a className="link" href="/">Xem chi tiết</a>
                                <a className="link" href="/">Xóa</a>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div className="table-product__name">
                                    <img className="table-product__img" src="https://product.hstatic.net/200000053174/product/10_b6e996b6d9b249728ce9e760a0069b61_master.jpg" alt="" />
                                    <p className="table-product__text">Áo phông</p>
                                </div>
                            </td>
                            <td>Áo quần</td>
                            <td>1000$</td>
                            <td>100</td>
                            <td>30</td>
                            <td className="handle-row">
                                <a className="link" href="/">Cập nhật</a>
                                <a className="link" href="/">Xem chi tiết</a>
                                <a className="link" href="/">Xóa</a>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div className="table-product__name">
                                    <img className="table-product__img" src="https://product.hstatic.net/200000053174/product/10_b6e996b6d9b249728ce9e760a0069b61_master.jpg" alt="" />
                                    <p className="table-product__text">Áo phông</p>
                                </div>
                            </td>
                            <td>Áo quần</td>
                            <td>1000$</td>
                            <td>100</td>
                            <td>30</td>
                            <td className="handle-row">
                                <a className="link" href="/">Cập nhật</a>
                                <a className="link" href="/">Xem chi tiết</a>
                                <a className="link" href="/">Xóa</a>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListProductShop