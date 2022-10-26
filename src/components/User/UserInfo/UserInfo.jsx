import "./userInfo.css"
const UserInfo = () => {
    return (
        <div className="userInfo-section">
            <form action="" className="userInfo-form">
                <div className="form-group">
                    <label htmlFor="name">Tên</label>
                    <input value="Thanh Nhat" type="text" className="form-control" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input value="thanhnhatpct108@gmail.com" type="text" className="form-control" id="Email" name="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Số điện thoại</label>
                    <input value="0905273761" type="text" className="form-control" id="Phone" name="Phone" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Địa chỉ</label>
                    <input value="Da Nang" type="text" className="form-control" id="addr" name="addr" />
                </div>

                <button className="btn-save">Lưu</button>
            </form>
        </div>
    )
}

export default UserInfo