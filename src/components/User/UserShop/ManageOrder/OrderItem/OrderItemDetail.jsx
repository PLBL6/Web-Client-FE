import axios from "axios";
import { memo } from "react";
import { useEffect, useState } from "react";
import { URL_API, URL_API_2 } from "../../../../../url";
import ColorData from "../../../../data/ColorData";
import SizeData from "../../../../data/SizeData";

function OrderItemDetail({ ordersByUser, orderDetail, setOrdersByUser }) {
    // console.log("orderDetail:", orderDetail);
    // console.log("ordersByUser", ordersByUser);
    const [detailProduct, setDetailProduct] = useState()
    useEffect(() => {
        const getDetailProduct = async () => {
            await axios.get(URL_API + `api/get-detail-chitietmathang?ctmhId=${orderDetail.maCTMH}`)
                .then(res => setDetailProduct(res.data.ctmh))
        }
        getDetailProduct()
    }, [])

    // console.log(detailProduct);

    const UpdateStatusOrderDetail = async (orderdetail) => {
        await axios.put(URL_API_2 + "api/update-chitietdonhang-by-id", {
            "id": orderdetail.id,
            "trangThai": "Đã giao"
        },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": JSON.parse(localStorage.getItem("login")).token,
                    // "Access-Control-Allow-Origin": "*",
                },
            }
        ).then(res => console.log(res.data))

        orderdetail.trangThai = "Đã giao"
        const dataClone = [...ordersByUser]

        const dataKhachHang = dataClone.find(item => item.order.find(sub => sub.khachHangId === orderdetail.khachHangId))
        const indexDataKhachHang = dataClone.indexOf(dataKhachHang)
        const indexOrderDetail = dataKhachHang.order.indexOf(orderdetail)

        dataKhachHang[indexOrderDetail] = { ...orderdetail }
        dataClone[indexDataKhachHang] = { ...dataKhachHang }

        setOrdersByUser(dataClone)
    }

    return (
        <div className="order-item__product">
            <div className="order-item__info">
                <img src={orderDetail.maMHhinhAnh || "https://dxmvietnam.com/asset/images/no-image-found.png"} alt="" />
                <div>
                    <p className="order-item__product-name">{orderDetail.maMHName}</p>
                    <span>x{orderDetail.soLuong}</span>
                    <p>{`Màu: ${ColorData[detailProduct?.maMS - 1]}`} - {`Size: ${SizeData[detailProduct?.maKC - 1]}`}</p>
                    {/* <p>{orderDetail.ChiTietDonHangData.ChiTietDonHang.createdAt}</p> */}
                </div>
            </div>
            <div className="order-wrap-status-price">
                <p className="order-item-value">{orderDetail.tongTien} $</p>
                <p>Trạng thái: {orderDetail.trangThai}</p>
                {orderDetail.trangThai == "Đã đặt"
                    ? <button onClick={() => UpdateStatusOrderDetail(orderDetail)} className="btn btn-primary">Đã giao</button>
                    : ""
                }
            </div>
        </div>
    );
}

export default memo(OrderItemDetail);