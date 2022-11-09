import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react"

const CreateProductShop = () => {
    const [category, setCategory] = useState("")
    const [avatars, setAvatars] = useState()

    const handlePreviewAvatar = (e) => {
        const files = e.target.files
        const listAvatars = []
        for (let file of files) {
            listAvatars.push(URL.createObjectURL(file))
        }
        console.log(listAvatars);
        setAvatars(listAvatars)
    }
    return (
        <div className="CreateProductShop__section">
            <div className="base-info">
                <h2>Thông tin cơ bản</h2>
                <div className="form-group">
                    <label className="form-label" htmlFor="img"><span className="info-important">*</span>Hình ảnh sản phẩm</label>
                    <div className="upload-image">
                        <label htmlFor="file">Thêm hình ảnh</label>
                        <input onChange={handlePreviewAvatar} id="file" type="file" name="file" accept="image/*" multiple="multiple" />
                    </div>
                    {avatars && avatars.map((item, index) => (
                        <img
                            key={index}
                            className="base-info__avatar"
                            src={item}
                            alt="avatar-product"
                        />
                    ))}

                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="name"><span className="info-important">*</span>Tên sản phẩm</label>
                    <input className="form-control" type="text" placeholder="Tên sản phẩm ..." />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="category"><span className="info-important">*</span>Mặt hàng</label>
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
                <div className="form-group">
                    <label className="form-label" htmlFor="">Mô tả sản phẩm</label>
                    <textarea className="" name="description" cols="100" rows="10"></textarea>
                </div>
            </div>

            <div className="details-info">
                <h2>Thông tin chi tiết</h2>
                <div className="form-group">
                    <label className="form-label" htmlFor="color">Màu sắc</label>
                    <input className="form-control" type="text" placeholder="Màu sản phẩm ..." />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="color">Kích cỡ</label>
                    <input className="form-control" type="text" placeholder="Kích cỡ sản phẩm ..." />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="price"><span className="info-important">*</span>Giá</label>
                    <input className="form-control form-control-custom" type="number" placeholder="Giá sản phẩm ..." />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="quantity"><span className="info-important">*</span>Kho hàng</label>
                    <input className="form-control form-control-custom" type="number" placeholder="Kho hàng ..." />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="discount">Giảm giá</label>
                    <input className="form-control form-control-custom" type="number" placeholder="Giảm giá (%) ..." />
                </div>
            </div>

            <button className="btn-primary btn-create">Thêm mới sản phẩm</button>
        </div>
    )
}

export default CreateProductShop