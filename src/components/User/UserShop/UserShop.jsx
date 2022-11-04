import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import CreateProductShop from "./ManageProduct/CreateProductShop"
import ListProductShop from "./ManageProduct/ListProductShop"
import "./userShop.css"

const UserShop = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className="userShop-section grid__row">
            <div className="userShop__category grid__column-3">
                <List
                    sx={{ width: '100%', maxWidth: 280, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            DashBoard
                        </ListSubheader>
                    }
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <i className="fa-solid fa-list"></i>
                        </ListItemIcon>
                        <ListItemText primary="Quản lí đơn hàng" />
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpen(!open)}>
                        <ListItemIcon>
                            <i className="fa-solid fa-bag-shopping"></i>
                        </ListItemIcon>
                        <ListItemText primary="Quản lí sản phẩm" />
                        {open ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to="/user-shop/all">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText secondary="Tất cả sản phẩm" />
                                </ListItemButton>
                            </Link>

                            <Link to="/user-shop/new-product">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText secondary="Thêm sản phẩm" />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>

                    <ListItemButton>
                        <ListItemIcon>
                            <i className="fa-solid fa-money-check-dollar"></i>
                        </ListItemIcon>
                        <ListItemText primary="Doanh thu" />
                    </ListItemButton>

                </List>
            </div>


            <div className="handle-user-shop-section grid__column-9 no-pd">
                <Routes>
                    <Route path="/all" element={<ListProductShop />}></Route>
                    <Route path="/new-product" element={<CreateProductShop />}></Route>
                </Routes>
                
            </div>
        </div>
    )
}

export default UserShop