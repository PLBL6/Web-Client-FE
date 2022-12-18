import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { URL_API_2 } from "../../../url"
import "./userInfo.css"

const UserInfo = ({ user }) => {
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()

    return (
        <div className="userInfo-section boxShadow">
            <form action="" className="userInfo-form">
                <div className="form-group">
                    <label htmlFor="name">Tên</label>
                    <input
                        type="text" className="form-control" id="name" name="name"
                        ref={nameRef}
                        value={user?.ten}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                        type="text" className="form-control" id="Email" name="Email"
                        ref={emailRef}
                        value={user?.email}

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Số điện thoại</label>
                    <input
                        type="text" className="form-control" id="Phone" name="Phone"
                        ref={phoneRef}
                        value={user?.sdt}

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Địa chỉ</label>
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