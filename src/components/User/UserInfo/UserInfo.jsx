import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { URL_API_2 } from "../../../url"
import "./userInfo.css"

const UserInfo = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()

    const [info, setInfo] = useState()

    useEffect(() => {
        const getInfo = async () => {
            const data = await axios(URL_API_2 + `api/get-khachhang-by-id?khachHangId=${JSON.parse(localStorage.getItem("login"))?.user?.id}`,{
                mode:'no-cors',
                headers: {
                    "Authorization": `${JSON.parse(localStorage.getItem("login")).token}`
                }
            })
            setInfo(data.data.khachhang)
        }
        setTimeout(() => {
            getInfo()
        }, 500);

    }, [])

    return (
        <div className="userInfo-section boxShadow">
            <form action="" className="userInfo-form">
                <div className="form-group">
                    <label htmlFor="name">Tên</label>
                    <input
                        type="text" className="form-control" id="name" name="name"
                        ref={nameRef}
                        value={info?.ten}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                        type="text" className="form-control" id="Email" name="Email"
                        ref={emailRef}
                        value={info?.email}

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Số điện thoại</label>
                    <input
                        type="text" className="form-control" id="Phone" name="Phone"
                        ref={phoneRef}
                        value={info?.sdt}

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Địa chỉ</label>
                    <input
                        type="text" className="form-control" id="addr" name="addr"
                        ref={addressRef}
                        value={info?.diaChi}

                    />
                </div>

                <button className="btn-primary mtop">Lưu</button>
            </form>
        </div>
    )
}

export default UserInfo