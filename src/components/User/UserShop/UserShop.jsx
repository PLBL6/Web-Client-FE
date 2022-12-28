import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { filterByCustomer } from "../../../filterByCustomer"
import { URL_API, URL_API_2 } from "../../../url"
import ListOrder from "./ManageOrder/ListOrder"
import CreateDetailProduct from "./ManageProduct/CreateDetailProduct"
import CreateProductShop from "./ManageProduct/CreateProductShop"
import ListProductShop from "./ManageProduct/ListProductShop"
import Revenue from "./Revenue/Revenue"
import "./userShop.css"

const UserShop = () => {
    const [open, setOpen] = useState(true)
    const [orders, setOrders] = useState()
    const [ordersByUser, setOrdersByUser] = useState()
    const [loading, setLoading] = useState(false)

    const [loadingProducts, setLoadingProducts] = useState(false)

    const [products, setProducts] = useState();
    const [categoryByShop, setCategoryByShop] = useState()

    const [colors, setColors] = useState()
    const [sizes, setSizes] = useState()


    const [selectedindex, setSelectedIndex] = useState(() => {
        return JSON.parse(localStorage.getItem("indexCategoryShopPage")) ?? 0
    })

    useEffect(() => {
        const getCorlors = async () => {
            const data = await axios(URL_API + "api/get-all-mausac")
            setColors(data.data.mausac)
        }
        const getSizes = async () => {
            const data = await axios(URL_API + "api/get-all-kichco")
            setSizes(data.data.kichco)
        }
        getCorlors()
        getSizes()
    } ,[])



    useEffect(() => {
        setLoading(true)
        const getOrderShop = async () => {
            const data = await axios(URL_API_2 + `api/get-all-donhangs-by-id-nhacungcap?nhaCungCapId=${JSON.parse(localStorage.getItem("login")).user.id}`)
            // console.log(data.data.chitietdonhangs);

            setOrdersByUser(filterByCustomer(data.data.chitietdonhangs))
            setOrders(data.data.chitietdonhangs)
            setLoading(false)
        }
        getOrderShop()
    }, [])


    useEffect(() => {
        setLoadingProducts(true)
        const GetAllProduct = async () => {
            const data = await axios(URL_API + `api/get-all-mathangs-by-id-nhacungcap?nhaCungCapId=${JSON.parse(localStorage.getItem("login")).user.id}`)
            setProducts(data.data.mathangs)
            setLoadingProducts(false)
        }
        GetAllProduct()
    }, [])


    useEffect(() => {
        const getCategories = async () => {
            const data = await axios.get(URL_API + `api/get-danhmucs-by-id-nhacungcap?nhaCungCapId=${JSON.parse(localStorage.getItem("login")).user.id}`)
            setCategoryByShop(data.data.mathangs)
        }
        getCategories()
    }, [])

    const handleListItemClick = (e, index) => {
        setSelectedIndex(index)
        localStorage.setItem("indexCategoryShopPage", index)

    }

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
                    <Link to="/user-shop/order">
                        <ListItemButton selected={selectedindex === 0} onClick={e => handleListItemClick(e, 0)}>
                            <ListItemIcon>
                                <i className="fa-solid fa-list"></i>
                            </ListItemIcon>
                            <ListItemText primary="Quản lí đơn hàng" />
                        </ListItemButton>
                    </Link>

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
                                <ListItemButton sx={{ pl: 4 }} selected={selectedindex === 1} onClick={e => handleListItemClick(e, 1)}>
                                    <ListItemText secondary="Tất cả sản phẩm" />
                                </ListItemButton>
                            </Link>

                            <Link to="/user-shop/new-product">
                                <ListItemButton sx={{ pl: 4 }} selected={selectedindex === 2} onClick={e => handleListItemClick(e, 2)}>
                                    <ListItemText secondary="Thêm sản phẩm" />
                                </ListItemButton>
                            </Link>

                            <Link to="/user-shop/new-product-detail">
                                <ListItemButton sx={{ pl: 4 }} selected={selectedindex === 3} onClick={e => handleListItemClick(e, 3)}>
                                    <ListItemText secondary="Thêm chi tiết sản phẩm" />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>

                    <Link to="/user-shop/revenue">
                        <ListItemButton selected={selectedindex === 4} onClick={e => handleListItemClick(e, 4)}>
                            <ListItemIcon>
                                <i className="fa-solid fa-money-check-dollar"></i>
                            </ListItemIcon>
                            <ListItemText primary="Doanh thu" />
                        </ListItemButton>

                    </Link>

                </List>
            </div>


            <div className="handle-user-shop-section grid__column-9 no-pd">
                <Routes>
                    <Route path="/*" element={<h1 className="user-shop-heading">Xin chào cửa hàng, ....</h1>}></Route>
                    <Route path="/all" element={<ListProductShop categoryByShop={categoryByShop} products={products} loadingProducts={loadingProducts} handleListItemClick={handleListItemClick} />}></Route>
                    <Route path="/new-product" element={<CreateProductShop />}></Route>
                    <Route path="/order" element={<ListOrder
                        orders={orders}
                        ordersByUser={ordersByUser}
                        setOrdersByUser={setOrdersByUser}
                        loading={loading} />}></Route>
                    <Route path="/new-product-detail" element={<CreateDetailProduct products={products} colors={colors} sizes={sizes} />}></Route>
                    <Route path="/revenue" element={<Revenue orders={orders} />}></Route>

                </Routes>

            </div>
        </div>
    )
}

export default UserShop