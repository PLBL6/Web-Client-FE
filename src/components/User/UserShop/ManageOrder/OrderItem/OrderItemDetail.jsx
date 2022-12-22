import ColorData from "../../../../data/ColorData";
import SizeData from "../../../../data/SizeData";

function OrderItemDetail({ orderDetail }) {
    console.log("orderDetail:", orderDetail);
    return (
        <div className="order-item__product">
            <div className="order-item__info">
                <img src={orderDetail.maMHhinhAnh || "https://dxmvietnam.com/asset/images/no-image-found.png"} alt="" />
                <div>
                    <p className="order-item__product-name">{orderDetail.maMHName}</p>
                    <span>x{orderDetail.ChiTietDonHangData.ChiTietDonHang.soLuong}</span>
                    <p>{`Màu: ${ColorData[orderDetail.ChiTietDonHangData.maMS - 1]}`} - {`Size: ${SizeData[orderDetail.ChiTietDonHangData.maKC - 1]}`}</p>
                    <p>{orderDetail.ChiTietDonHangData.ChiTietDonHang.createdAt}</p>
                </div>
            </div>
            <div className="order-wrap-status-price">
                <p className="order-item-value">{orderDetail.ChiTietDonHangData.ChiTietDonHang.tongTien} $</p>
                <p>Trạng thái: Đã giao </p>
                {/* <button className="btn btn-primary">Đã giao</button> */}
            </div>
        </div>
    );
}

export default OrderItemDetail;