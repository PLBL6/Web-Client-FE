import axios from "axios";
import { memo } from "react";
import { useEffect, useState } from "react";
import { URL_API } from "../../../../url";
import ColorData from "../../../data/ColorData";
import SizeData from "../../../data/SizeData";

const UserOrderItemDetail = ({ orderDetail }) => {

    const [orderItemDetail, setOrderItemDetail] = useState()

    useEffect(() => {
        const getOrderDetailItem = async () => {
            const data = await axios(URL_API + `api/get-detail-chitietmathang?ctmhId=${orderDetail.maCTMH}`)
            setOrderItemDetail(data.data)
        }

        setTimeout(() => {
            getOrderDetailItem()
        }, 0)

        // axios(URL_API + `api/get-detail-chitietmathang?ctmhId=${orderDetail?.maCTMH}`, {
        //     mode: 'no-cors',
        //     headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         "Authorization": `${JSON.parse(localStorage.getItem("login")).token}`
        //     }
        // }).then(res => setOrderItemDetail(res.data))

    }, [])

    return (
        <div className="order-item__product">
            <div className="order-item__info">
                <img src={orderItemDetail?.mathang?.hinhAnh} alt="" />
                <div>
                    <p className="order-item__product-name">{orderItemDetail?.mathang?.tenMatHang}</p>
                    <span>x{orderDetail.soLuong}</span>
                    <p className="order-item-shop">{`${ColorData[orderItemDetail?.ctmh?.maMS]} - ${SizeData[orderItemDetail?.ctmh?.maKC]}`}</p>
                </div>
            </div>
            <p className="order-item-value">{orderDetail?.tongTien}$</p>
        </div>
    )
}

export default memo(UserOrderItemDetail) 