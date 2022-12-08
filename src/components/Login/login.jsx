import { useEffect, useRef } from "react"
import "./login.css"

function Login({ isOpenModalLogin, SetOpenModalLogin, isOpenModalSignUp, SetOpenModalSignUp, isVendorLogin, LoginCustomer }) {

    useEffect(() => {
        const modalOverlay = document.querySelector('.modal__overlay')
        modalOverlay.onclick = () => {
            SetOpenModalLogin(false)
            SetOpenModalSignUp(false)
        }

    }, [])


    const field1 = useRef()
    const field2 = useRef()
    const fieldRegister3 = useRef()





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
                                <input ref={field1} type="text" className="auth-form__input" placeholder="Email" />
                            </div>
                            <div className="auth-form__group">
                                <input ref={field2} type="password" className="auth-form__input" placeholder="Mật khảu" />
                            </div>
                            {isOpenModalSignUp ?
                                <div className="auth-form__group">
                                    <input ref={fieldRegister3} type="password" className="auth-form__input" placeholder="Nhập lại mật khảu" />
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
                                {isOpenModalSignUp ? <button className="btn btn--primary">ĐĂNG KÝ</button> : <button onClick={() => LoginCustomer("khachhang6", "password6")} className="btn btn--primary">ĐĂNG NHẬP</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login