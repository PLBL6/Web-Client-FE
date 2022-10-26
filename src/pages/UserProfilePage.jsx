import Category from "../components/Category/Category"
import CategoryUserData from "../components/data/CategoryUserData"
import UserInfo from "../components/User/UserInfo/UserInfo"

const UserProfilePage = () => {
    return (
        <div className="user-page-section grid1200">
            <div className="grid__row">
                <div className="grid__column-3">
                    <Category data={CategoryUserData} />

                </div>
                <div className="grid__column-9">
                    <UserInfo />
                </div>

            </div>
        </div>
    )
}

export default UserProfilePage