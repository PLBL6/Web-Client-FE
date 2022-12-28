import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import axios from "axios";
import { async } from "q";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { URL_API } from "../../../../url";

const CreateProductShop = () => {

    const [searchParams] = useSearchParams();

    const [product, setProduct] = useState()

    useEffect(() => {
        const getProduct = async () => {
            const data = await axios(URL_API + `api/get-mathangs?idMatHang=${localStorage.getItem("ProductIdDetail")}`)
            setProduct(data.data.mathangs)
        }

        if (Number(searchParams.get("idProduct"))) {
            getProduct()
        }
    }, [])

    useEffect(() => {
        const getCategory = async () => {
            const data = await axios(URL_API + "api/get-danhmucs")
            setCategory(data.data.danhmucs)
        }
        getCategory()
    })

    const [category, setCategory] = useState()
    const [avatars, setAvatars] = useState()

    const [name, setName] = useState()
    const [idCategory, setIdCategory] = useState('')
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [discount, setDiscount] = useState()

    const handlePreviewAvatar = (e) => {
        const files = e.target.files
        // const listAvatars = []
        // for (let file of files) {
        //     listAvatars.push(URL.createObjectURL(file))
        // }
        // console.log(listAvatars);
        setAvatars(files[0])
    }

    const CreateProduct = async (name, description, price, idCategory, idVendor, discount, objImage) => {
        const body = {
            "tenMatHang": name,
            "moTa:": description,
            "gia": price,
            "danhMuc": idCategory,
            "nhaCungCap": idVendor,
            "khuyenMai": discount,
            "hinhAnh": objImage
        }
        const data = await axios.post(URL_API + "api/create-new-mat-hang", body, {
            headers: {
                "Authorization": JSON.parse(localStorage.getItem("login")).token,
            }
        })
        console.log(data);
    }
    return (
        <div className="CreateProductShop__section">
            <div className="base-info">
                <h2>Thông tin cơ bản</h2>
                <div className="form-group">
                    <label className="form-label" htmlFor="img"><span className="info-important">*</span>Hình ảnh sản phẩm</label>
                    <div className="upload-image">
                        <label htmlFor="file">Thêm hình ảnh</label>
                        <input onChange={handlePreviewAvatar} id="file" type="file" name="img" accept="image/*" multiple="multiple" />
                    </div>
                    {/* {avatars && avatars?.map((item, index) => (
                        <img
                            key={index}
                            className="base-info__avatar"
                            src={item}
                            alt="avatar-product"
                        />
                    ))} */}

                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="name"><span className="info-important">*</span>Tên sản phẩm</label>
                    <input className="form-control" type="text" placeholder="Tên sản phẩm ..." value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="category"><span className="info-important">*</span>Thể loại</label>
                    <Box sx={{ width: 300 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Thể loại</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="category"
                                value={idCategory}
                                onChange={(e) => { setIdCategory(e.target.value) }}
                            >
                                {category?.map(item => (
                                    <MenuItem key={item.id} value={item.id}>{item.tenDanhMuc}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="">Mô tả sản phẩm</label>
                    <textarea className="" name="description" cols="100" rows="10" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="price"><span className="info-important">*</span>Giá</label>
                    <input className="form-control form-control-custom" value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder="Giá sản phẩm ..." />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="discount">Khuyến mãi</label>
                    <input className="form-control form-control-custom" value={discount} onChange={e => setDiscount(e.target.value)} type="number" placeholder="Giảm giá (%) ..." />
                </div>
            </div>

            <button onClick={() => CreateProduct(name, description, price, idCategory, JSON.parse(localStorage.getItem("UserInfo")).id, avatars)} className="btn-primary btn-create">Lưu sản phẩm</button>
        </div>
    )
}

export default CreateProductShop