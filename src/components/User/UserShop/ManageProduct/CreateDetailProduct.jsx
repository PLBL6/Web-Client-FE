import { Box, FormControl, InputLabel, Menu, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { URL_API, URL_API_2 } from "../../../../url";
import ColorData from "../../../data/ColorData";
import SizeData from "../../../data/SizeData";

function CreateDetailProduct({ products, colors, sizes }) {

    const [searchParams] = useSearchParams();
    const [detailProduct, setDetailProduct] = useState()
    console.log(detailProduct);
    const [idProduct, setIdProduct] = useState(() => {
        return Number(searchParams.get("idProduct")) || ''
    })
    const [idDetail, setIdDetail] = useState()
    const [idColor, setIdColor] = useState('')
    const [idSize, setIdSize] = useState('')
    const [quantity, setQuantity] = useState(10)
    const [loading, setLoading] = useState(false)
    const [loadingAdd, setLoadingAdd] = useState(false)

    const [isUpdate, setIsUpdate] = useState(false)
    // console.log("--------------------");
    // console.log("idProduct:", idProduct);
    // console.log("idColor:", idColor);
    // console.log("idSize:", idSize);
    // console.log("quantity:", quantity);
    // console.log("--------------------");


    const handleAddDetail = async (idProduct, idColor, idSize, quantity) => {
        if (Number.isInteger(idProduct) && Number.isInteger(idColor) && Number.isInteger(idSize) && Number.isInteger(quantity)) {
            if (quantity < 10) {
                alert("Số lượng Kho hàng ít nhất là 10")
            } else {
                const body = {
                    "maMH": idProduct,
                    "maMS": idColor,
                    "maKC": idSize,
                    "soLuong": quantity
                }
                setLoadingAdd(true)
                const data = await axios.post(URL_API + "api/create-new-chi-tiet-mat-hang", body, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": JSON.parse(localStorage.getItem("login")).token,
                    }
                })
                setLoadingAdd(false)
                console.log(data.data.errMessage)
                if (data.data.errMessage.errCode === 0) {
                    setDetailProduct([...detailProduct, body])
                } else {
                    alert('Thất bại')
                }
            }

        } else {
            alert("Có lỗi xảy ra, thử lại")
        }
    }

    const UpdateDetail = async (idDetail, idColor, idSize, quantity) => {
        if (Number.isInteger(idColor) && Number.isInteger(idSize) && Number.isInteger(quantity)) {
            if (quantity < 10) {
                alert("Số lượng Kho hàng ít nhất là 10")
            } else {
                const body = {
                    "id": idDetail,
                    "maMS": idColor,
                    "maKC": idSize,
                    "soLuong": quantity
                }
                setLoadingAdd(true)
                const data = await axios.put(URL_API + "api/update-chi-tiet-mat-hang", body, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": JSON.parse(localStorage.getItem("login")).token,
                    }
                })
                setLoadingAdd(false)
                console.log(data.data.errMessage)
                if (data.data.errMessage.errCode === 0) {
                    const itemUpdate = detailProduct.find(item => item.id = idProduct)
                    itemUpdate.maKC = idSize
                    itemUpdate.maMS = idColor
                    itemUpdate.soLuong = quantity
                    const dataClone = [...detailProduct]
                    const index = dataClone.indexOf(itemUpdate)
                    setDetailProduct(dataClone)
                } else {
                    alert('Thất bại')
                }
            }

        } else {
            alert("Có lỗi xảy ra, thử lại")
        }
    }

    useEffect(() => {
        const getDetailProductFT = async (idProduct) => {
            const data = await axios(URL_API + `api/get-all-chi-tiet-mathangs-by-id-mathang?matHangID=${idProduct}`)
            setDetailProduct(data.data.chitietmathangs)
        }
        if (Number(searchParams.get("idProduct"))) {
            getDetailProductFT(Number(searchParams.get("idProduct")))
        }
    }, [])

    const getDetailProduct = async (idProduct) => {
        setLoading(true)
        const data = await axios(URL_API + `api/get-all-chi-tiet-mathangs-by-id-mathang?matHangID=${idProduct}`)
        setDetailProduct(data.data.chitietmathangs)
        setLoading(false)
    }

    return (
        <div className="CreateDetailProduct-section boxShadow">
            <div className="form-group form-group-handle">
                <label className="form-label" htmlFor="idProduct">Sản phẩm</label>
                <Box sx={{ width: 700 }}>
                    <FormControl fullWidth >
                        <InputLabel id="idProduct">Sản phẩm</InputLabel>
                        <Select
                            labelId="idProduct"
                            id="idProduct"
                            label="idProduct"
                            value={idProduct}
                            onChange={(e) => {
                                setIdProduct(e.target.value)
                                getDetailProduct(e.target.value)
                                setIdColor('')
                                setIdSize('')
                                setQuantity(10)
                            }}
                        >
                            {products?.map((item, index) => (
                                <MenuItem key={index} value={item.id}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={item.hinhAnh} alt="" style={{ width: "25px", height: "25px", marginRight: "10px" }} />
                                        <span>{item.tenMatHang}</span>
                                    </div>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <h3 className="option-current">Các lựa chọn hiện có</h3>

            {loading ? <div className="loading"></div>
                :
                <div className="list-detail-color-size">
                    {detailProduct?.length < 1 ? <span>Không</span> : ""}
                    {detailProduct?.map((item, index) => (
                        <div onClick={() => { setIdColor(item?.maMS); setIdDetail(item?.id); setIdSize(item?.maKC); setQuantity(item?.soLuong); setIsUpdate(true) }} key={index} className="detail-color-size">{`${ColorData[item?.maMS - 1]} - ${SizeData[item?.maKC - 1]}`}</div>
                    ))}
                </div>

            }
            <div className="details-info">
                <h2>Thêm thông tin chi tiết</h2>

                <div className="form-group form-group-handle">
                    <label className="form-label" htmlFor="idProduct"><span className="info-important">*</span>Màu sắc</label>
                    <Box sx={{ width: 400 }}>
                        <FormControl fullWidth >
                            <InputLabel id="idColor">Màu sắc</InputLabel>
                            <Select
                                labelId="idColor"
                                id="idColor"
                                label="idColor"
                                value={idColor}
                                onChange={(e) => setIdColor(e.target.value)}
                            >
                                {colors?.map(item => (
                                    <MenuItem key={item.id} value={item.id}>{item.tenMauSac}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className="form-group form-group-handle">
                    <label className="form-label" htmlFor="idProduct"><span className="info-important">*</span>Kích cỡ</label>
                    <Box sx={{ width: 400 }}>
                        <FormControl fullWidth >
                            <InputLabel id="idSize">Kích cỡ</InputLabel>
                            <Select
                                labelId="idSize"
                                id="idSize"
                                label="idSize"
                                value={idSize}
                                onChange={(e) => setIdSize(e.target.value)}
                            >
                                {sizes?.map(item => (
                                    <MenuItem key={item.id} value={item.id}>{item.kichCo}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="quantity"><span className="info-important">*</span>Kho hàng</label>
                    <input className="form-control form-control-custom" min={10} value={quantity} onChange={e => setQuantity(Number(e.target.value))} type="number" placeholder="Kho hàng ..." />
                </div>
            </div>
            {
                isUpdate ? <button onClick={() => UpdateDetail(idDetail, idColor, idSize, quantity)} className="btn-add-detail btn-primary">Lưu</button>
                    :
                    <button onClick={() => handleAddDetail(idProduct, idColor, idSize, quantity)} className="btn-add-detail btn-primary">Thêm sản phẩm</button>
            }
            {loadingAdd ? <div className="overlay-loading"><div className="loading-login"></div></div> : ""}
        </div>
    );
}

export default CreateDetailProduct;