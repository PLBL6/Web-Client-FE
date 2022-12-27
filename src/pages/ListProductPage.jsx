import { Link, Route, Routes } from "react-router-dom"
import { ListItemAvatar, Pagination } from "@mui/material"
import CategoryProductData from "../components/data/CategoryProductData"
import { useEffect, useState } from "react"
import axios from "axios"
import { List, ListItemButton, ListItemText } from "@mui/material"
import ListProduct from "../components/shops/ListProduct"
import { URL_API } from "../url"
// import Category from "../components/Category/Category"



const ListProductPage = () => {

    const [loading, setLoading] = useState(false)

    const [selectedindex, setSelectedIndex] = useState(() => {
        const index = JSON.parse(localStorage.getItem("indexCategory") - 1)
        return index ?? 0
    })

    const [products, setProducts] = useState([])

    const [indexCategory, setIndexCategory] = useState(() => {
        const cate = JSON.parse(localStorage.getItem("indexCategory"))
        return cate ?? 1
    })

    useEffect(() => {
        setLoading(true)
        const GetProducts = async (indexCategory) => {
            const res = await axios.get(URL_API + `api/get-all-mathangs-by-id-danhmuc?danhMucID=${indexCategory}`)
            setProducts(res.data.mathangs)
            setLoading(false)
        }

        GetProducts(indexCategory)

    }, [indexCategory])

    const handleListItemClick = (e, index, indexCate) => {
        localStorage.setItem("indexCategory", index)
        setSelectedIndex(indexCate - 1)

        setIndexCategory(indexCate)
        localStorage.setItem("indexCategory", indexCate)
        setCurrentPage(1)
    }

    // Pagination

    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 10

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    // Change pages
    const handlePageChange = (e, p) => {
        setCurrentPage(p)
    }

    return (
        <div className="listproduct-section grid1400">
            <div className="grid__row">
                <div className="grid__column-2">
                    <List
                        sx={{ width: '100%', maxWidth: 280, bgcolor: 'background.paper' }}
                        component="nav"
                        className="boxShadow"
                    >
                        {CategoryProductData.map((item, index) => (
                            <Link key={index} to={item.slug}>
                                <ListItemButton
                                    selected={selectedindex === index}
                                    onClick={(e) => handleListItemClick(e, index, item.id)}
                                >
                                    <ListItemAvatar>
                                        <img className="category-img" src={item.cateImg} alt={item.cateName} />
                                    </ListItemAvatar>
                                    <ListItemText primary={item.cateName} />
                                </ListItemButton>
                            </Link>
                        ))}

                    </List>
                </div>
                <div className="grid__column-10">
                    <div className="grid__row" style={{ marginTop: "10px" }}>
                        <Routes>
                            {CategoryProductData.map((item) => (
                                <Route key={item.id} path={`/${item.id}`} element={<ListProduct products={currentProducts} loading={loading} />}></Route>
                            ))}
                        </Routes>
                    </div>
                    <div className="pagination-wrapper">
                        <Pagination count={Math.ceil(products.length / productsPerPage)} page={currentPage} size="large" onChange={handlePageChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListProductPage