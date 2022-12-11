import axios from "axios"
import { useState } from "react"
import { useEffect, useRef } from "react"
import URL_API from "../../url"
import "./login.css"

function Login({ isOpenModalLogin, SetOpenModalLogin, isOpenModalSignUp, SetOpenModalSignUp, isVendorLogin,
    user, setUser }) {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")

    const LoginCustomer = async (username, password) => {
        const body = {
            "tenNguoiDung": username,
            "matKhau": password
        }
        const result = await axios.post(URL_API + `api/check-login-khachhang?matKhau&tenNguoiDung`, body)
        localStorage.setItem("login", JSON.stringify(result.data))
        setUser(result.data?.user)
        if (JSON.parse(localStorage.getItem("login"))?.errCode === 0) {
            SetOpenModalLogin(false)
            SetOpenModalSignUp(false)
        }
    }

    useEffect(() => {
        const modalOverlay = document.querySelector('.modal__overlay')
        modalOverlay.onclick = () => {
            SetOpenModalLogin(false)
            SetOpenModalSignUp(false)
        }
    }, [])

    // const handleLogin = () => {
    //     // LoginCustomer(userName, password);
    //     if (isVendorLogin) {
    //         console.log("Vendor Login");
    //     }
    //     else {
    //         console.log("Customer Login");
    //         LoginCustomer(userName, password);
    //         if (JSON.parse(localStorage.getItem("login"))?.errCode === 0) {
    //             SetOpenModalLogin(false)
    //             SetOpenModalSignUp(false)
    //         }
    //     }
    // }



    return (
        <div className="modal">
            <div className="modal__overlay"></div>
            <div className="modal__body">
                <div className="auth-form">
                    <div className="auth-form__container">
                        <div className="auth-form__header">
                            {isOpenModalSignUp ? <h3 className="auth-form__heading">Đăng Ký</h3> : <h3 className="auth-form__heading">Đăng Nhập</h3>}
                            {/* {isOpenModalSignUp ? <span className="auth-form__switch-btn">Đăng Nhập</span> : <span className="auth-form__switch-btn">Đăng Ký</span>} */}
                            {isVendorLogin ? <h2 className="role-text">Nhà cung cấp</h2> : <h2 className="role-text">Người tiêu dùng</h2>}
                        </div>

                        <div className="auth-form__form">
                            <div className="auth-form__group">
                                <input value={userName} onChange={e => setUserName(e.target.value)} type="text" className="auth-form__input" placeholder="Tên đăng nhập" />
                            </div>
                            <div className="auth-form__group">
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="auth-form__input" placeholder="Mật khảu" />
                            </div>
                            {isOpenModalSignUp ?
                                <div className="auth-form__group">
                                    <input value={passwordAgain} onChange={e => setPasswordAgain(e.target.value)} type="password" className="auth-form__input" placeholder="Nhập lại mật khảu" />
                                </div>
                                : ''
                            }

                            <div className="auth-form__aside">
                                {isOpenModalSignUp ?
                                    <p className="auth-form__policy-text">Bằng việc đăng kí, bạn đã đồng ý với Cloud về
                                        <a href="/" className="auth-form__text-link">Điều khoản dịch vụ</a> &
                                        <a href="/" className="auth-form__text-link">Chính sách bảo mật</a>
                                    </p>
                                    : <div className="auth-form__help">
                                        <a href="/" className="auth-form__help-link auth-form__help-text-primary">Quên mật khẩu</a>
                                        <span className="auth-form__help--separate"></span>
                                        <a href="/" className="auth-form__help-link ">Cần trợ giúp?</a>
                                    </div>
                                }
                            </div>

                            <div className="auth-form__controls">
                                <button className="btn auth-form__controls-back btn--normal">TRỞ LẠI</button>
                                {isOpenModalSignUp ? <button className="btn btn--primary">ĐĂNG KÝ</button> : <button onClick={() => LoginCustomer(userName, password)} className="btn btn--primary">ĐĂNG NHẬP</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login