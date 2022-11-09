import { useRef } from "react"
import "./userInfo.css"
const UserInfo = () => {
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
                        
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                        
                        type="text" className="form-control" id="Email" name="Email"
                        ref={emailRef}
                    />


                </div>
                <div className="form-group">
                    <label htmlFor="name">Số điện thoại</label>
                    <input
                        
                        type="text" className="form-control" id="Phone" name="Phone"
                        ref={phoneRef}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Địa chỉ</label>
                    <input
                         
                        type="text" className="form-control" id="addr" name="addr"
                        ref={addressRef}
                    />
                </div>

                <button className="btn-save">Lưu</button>
            </form>
        </div>
    )
}

export default UserInfo