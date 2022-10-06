import { useEffect } from "react"
import "./login.css"
import { signInWithGoogle } from "../../firebase"

function Login({ isOpenModalLogin, SetOpenModalLogin, isOpenModalSignUp, SetOpenModalSignUp,
    setEmail, email, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError, user
}) {

    const closeModalWhenLogin = () => {
        signInWithGoogle()
        if (user.email) {
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

        const switchBtn = document.querySelector('.auth-form__switch-btn')
        switchBtn.onclick = () => {
            SetOpenModalLogin(isOpenModalSignUp)
            SetOpenModalSignUp(isOpenModalLogin)
        }

        const modal = document.querySelector('.modal')
        if (user.email) {
            modal.style.display = 'none'
        }
    })

    return (
        <div className="modal">
            <div className="modal__overlay"></div>
            <div className="modal__body">
                <div className="auth-form">
                    <div className="auth-form__container">
                        <div className="auth-form__header">
                            {isOpenModalSignUp ? <h3 className="auth-form__heading">Đăng Ký</h3> : <h3 className="auth-form__heading">Đăng Nhập</h3>}
                            {isOpenModalSignUp ? <span className="auth-form__switch-btn">Đăng Nhập</span> : <span className="auth-form__switch-btn">Đăng Ký</span>}
                        </div>

                        <div className="auth-form__form">
                            <div className="auth-form__group">
                                <input type="text" className="auth-form__input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value) }/>
                            </div>
                            <div className="auth-form__group">
                                <input type="password" className="auth-form__input" placeholder="Mật khảu" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            {isOpenModalSignUp ?
                                <div className="auth-form__group">
                                    <input type="password" className="auth-form__input" placeholder="Nhập lại mật khảu" />
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
                                {isOpenModalSignUp ? <button onClick={handleSignUp} className="btn btn--primary">ĐĂNG KÝ</button> : <button onClick={handleLogin} className="btn btn--primary">ĐĂNG NHẬP</button>}
                            </div>
                        </div>
                    </div>
                    <div className="auth-form__socials">
                        <button className="auth-form__socials--facebook btn btn--with-icon">
                            <i className="auth-form__socials-icon fa-brands fa-facebook-square"></i>
                            <span className="auth-form__socials-title">Đăng nhập với Facebook</span>
                        </button>
                        <button onClick={closeModalWhenLogin} className="auth-form__socials--google btn btn--with-icon">
                            <i className="auth-form__socials-icon fa-brands fa-google"></i>
                            <span className="auth-form__socials-title">Đăng nhập với Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login