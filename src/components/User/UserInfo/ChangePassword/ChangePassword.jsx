import axios from "axios"
import { useEffect, useState } from "react"
import { URL_API_2 } from "../../../../url"
import validator from "../../../../validator"

const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [newPasswordConfirm, setNewPasswordConfirm] = useState()

    useEffect(() => {
        validator({
            form: "#auth-form-change-password",
            formGroupSelector: ".auth-form__group",
            errorSelector: ".form-message",
            rules: [
                validator.isRequired("#curr-password"),
                validator.isRequired("#new-password"),
                validator.minLength("#new-password", 6),
                validator.isRequired("#new-password-confirm"),
                validator.isComfirmedPassword("#new-password-confirm", function () {
                    return document.querySelector('#auth-form-change-password #new-password').value
                }, "Mật khẩu nhập lại không chính xác")
            ]
        })
    }, [])

    const ChangePasswordUser = async (oldPassword, newPassword, newPasswordConfirm) => {
        const body = {
            "id": JSON.parse(localStorage.getItem("login")).user.id,
            "matKhau": newPassword
        }
        if (newPassword === newPasswordConfirm) {
            const result = await axios.post(URL_API_2 + "api/update-password-khachhang", body, {
                headers: {
                    "mode": "no-cors",
                    "Authorization": `${JSON.parse(localStorage.getItem("login")).token}`,
                    "Access-Control-Allow-Headers": "*",
                }
            })
            console.log("Update mat khau nguoi dung:", result.data.errMessage);
        }
        else {
            alert("Vui lòng kiểm tra lại")
        }
    }


    return (
        <div className="change-password-section boxShadow">
            <div className="auth-form" id="auth-form-change-password">
                <div className="auth-form__group">
                    <label htmlFor="curr-password">Mật khẩu hiện tại</label>
                    <input
                        type="password" className="form-control" id="curr-password" name="curr-password"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                    />
                    <span className="form-message"></span>
                </div>
                <div className="auth-form__group" style={{ marginTop: "12px" }}>
                    <label htmlFor="new-password">Mật khẩu mới</label>
                    <input
                        type="password" className="form-control" id="new-password" name="new-password"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                    <span className="form-message"></span>
                </div>
                <div className="auth-form__group" style={{ marginTop: "12px" }}>
                    <label htmlFor="new-password-confirm">Nhập lại mật khẩu</label>
                    <input
                        type="password" className="form-control" id="new-password-confirm" name="new-password-confirm"
                        value={newPasswordConfirm}
                        onChange={e => setNewPasswordConfirm(e.target.value)}
                    />
                    <span className="form-message"></span>
                </div>
                <button style={{ marginTop: "20px" }} className="btn-primary">Đổi mật khẩu</button>
            </div>
        </div>
    )
}

export default ChangePassword