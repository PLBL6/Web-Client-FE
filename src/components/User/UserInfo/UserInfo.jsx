import axios from "axios"
import { useEffect, useState } from "react"
import { URL_API_2 } from "../../../url"
import "./userInfo.css"

const UserInfo = ({ user, setUser }) => {
    const [avatar, setAvatar] = useState(user.anhDaiDien)
    const [firstName, setFirstName] = useState(user.ten)
    const [lastName, setLastName] = useState(user.ho)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.sdt)
    const [address, setAddress] = useState(user.diaChi)

    const handlePreviewAvatar = (e) => {
        const files = e.target.files
        console.log(URL.createObjectURL(files[0]));
        setAvatar(URL.createObjectURL(files[0]))
        // setAvatar(listAvatars)
    }

    const updateInfo = async (firstName, lastName, email, phone, address) => {
        const body = {
            "id": JSON.parse(localStorage.getItem("UserInfo")).id,
            "ten": firstName,
            "ho": lastName,
            "email": email,
            "sdt": phone,
            "diaChi": address
        }

        const result = await axios.put(URL_API_2 + `api/update-khachhang-by-id`, body, {
            headers: {
                "mode": "no-cors",
                "Content-Type": "application/json",
                "Authorization": `${JSON.parse(localStorage.getItem("login")).token}`,
                "Access-Control-Allow-Headers": "*",
            }
        })
        console.log("Update thông tin khách hàng:", result.data.errMessage)
        if (result.data.errMessage.errCode === 0) {
            const dataClone = { ...user }
            dataClone.ten = firstName
            dataClone.ho = lastName
            dataClone.email = email
            dataClone.sdt = phone
            dataClone.diaChi = address
            localStorage.setItem("UserInfo", JSON.stringify(dataClone))
            setUser(dataClone)
            alert('Thay đổi thông tin thành công');
        } else {
            alert('Có lỗi xảy ra');
        }
    }

    return (
        <div className="userInfo-section boxShadow">
            <div action="" className="userInfo-form">
                <div className="form-group">
                    <label htmlFor="">Ảnh đại diện</label>
                    <img
                        className="user-avatar"
                        src={avatar || "https://dxmvietnam.com/asset/images/no-image-found.png"}
                        alt="avatar"
                    />
                    <label className="btn-user-img" htmlFor="user-img">Đổi ảnh</label>
                    <input className="input-user-img" type="file" id="user-img" onChange={handlePreviewAvatar} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Tên người dùng</label>
                    <input
                        type="text" className="form-control" id="username" name="username"
                        value={user?.tenNguoiDung}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Họ</label>
                    <input
                        type="text" className="form-control" id="lastName" name="lastName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Tên</label>
                    <input
                        type="text" className="form-control" id="firstName" name="firstName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input
                        type="text" className="form-control" id="Email" name="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Phone">Số điện thoại</label>
                    <input
                        type="text" className="form-control" id="Phone" name="Phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="addr">Địa chỉ</label>
                    <input
                        type="text" className="form-control" id="addr" name="addr"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <p className="text-warning">*Vui lòng điền chính xác địa chỉ của bạn để thuận tiện cho việc giao hàng</p>

                <button onClick={() => updateInfo(firstName, lastName, email, phone, address)} className="btn-primary mtop">Lưu</button>
            </div>
        </div>
    )
}

export default UserInfo