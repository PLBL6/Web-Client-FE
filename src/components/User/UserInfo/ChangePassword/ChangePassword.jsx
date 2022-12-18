const ChangePassword = () => {
    return (
        <div className="change-password-section boxShadow">
            <form action="">
                <div className="form-group">
                    <label htmlFor="curr-password">Mật khẩu hiện tại</label>
                    <input
                        type="password" className="form-control" id="curr-password" name="curr-password"
    
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="new-passowrd">Mật khẩu mới</label>
                    <input
                        type="text" className="form-control" id="new-passowrd" name="new-passowrd"
    
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="new-passowrd-confirm">Nhập lại mật khẩu</label>
                    <input
                        type="text" className="form-control" id="new-passowrd-confirm" name="new-passowrd-confirm"
                    />
                </div>
                <button style={{marginTop:"20px"}} className="btn-primary">Đổi mật khẩu</button>
            </form>
        </div>
    )
}

export default ChangePassword