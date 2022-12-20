import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { URL_API_2 } from "../../../url"
import "./userInfo.css"

const UserInfo = ({ user }) => {
    const firstNameRef = useRef()
    const lastNameRef = useRef()

    const emailRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()

    return (
        <div className="userInfo-section boxShadow">
            <form action="" className="userInfo-form">
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
                        ref={lastNameRef}
                        value={user?.ho}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Tên</label>
                    <input
                        type="text" className="form-control" id="firstName" name="firstName"
                        ref={firstNameRef}
                        value={user?.ten}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input
                        type="text" className="form-control" id="Email" name="Email"
                        ref={emailRef}
                        value={user?.email}

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Phone">Số điện thoại</label>
                    <input
                        type="text" className="form-control" id="Phone" name="Phone"
                        ref={phoneRef}
                        value={user?.sdt}

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="addr">Địa chỉ</label>
                    <input
                        type="text" className="form-control" id="addr" name="addr"
                        ref={addressRef}
                        value={user?.diaChi}

                    />
                </div>

                <button className="btn-primary mtop">Lưu</button>
            </form>
        </div>
    )
}

export default UserInfo