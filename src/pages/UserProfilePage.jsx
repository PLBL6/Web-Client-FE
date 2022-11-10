import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import CategoryUserData from "../components/data/CategoryUserData"

import { Link, Route, Routes } from "react-router-dom"
import UserInfo from "../components/User/UserInfo/UserInfo"
import { useState } from "react"
import UserOrder from "../components/User/UserInfo/UserOrder/UserOrder"
import ChangePassword from "../components/User/UserInfo/ChangePassword/ChangePassword"

const UserProfilePage = () => {
    const [selectedindex, setSelectedIndex] = useState(0)

    const handleListItemClick = (e, index) => {
        setSelectedIndex(index)
    }
    return (

        <div className="user-page-section-wrapper">
            <div className="user-page-section grid1200">
                <div className="grid__row">
                    <div className="grid__column-3">
                        <List
                            sx={{ width: '100%', maxWidth: 280, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            className="boxShadow"
                        >
                            {CategoryUserData.map((item, index) => (
                                <Link key={index} to={item.slug}>
                                    <ListItemButton
                                        selected={selectedindex === index}
                                        onClick={(e) => handleListItemClick(e, index)}
                                    >
                                        <ListItemIcon>
                                            <i className={item.cateIcon}></i>
                                        </ListItemIcon>
                                        <ListItemText primary={item.cateName} />
                                    </ListItemButton>
                                </Link>
                            ))}

                        </List>

                    </div>
                    <div className="grid__column-9">
                        <Routes>
                            <Route path="/profile" element={<UserInfo />}></Route>
                            <Route path="/purchase" element={<UserOrder />}></Route>
                            <Route path="/change-password" element={<ChangePassword />}></Route>
                        </Routes>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default UserProfilePage