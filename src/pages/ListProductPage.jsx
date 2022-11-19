import { Link, Route, Routes } from "react-router-dom"
import { Pagination } from "@mui/material"
import CategoryProductData from "../components/data/CategoryProductData"
import { useEffect, useState } from "react"
import axios from "axios"

import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import ListProduct from "../components/shops/ListProduct"

const ListProductPage = () => {

    const [selectedindex, setSelectedIndex] = useState(() => {
        const index = JSON.parse(localStorage.getItem("indexCategory"))
        return index ?? 0
     })

    const [products, setProducts] = useState([])
    const [category, setCategory] = useState(() => {
        const cate = JSON.parse(localStorage.getItem("Category"))
        return cate ?? ""
    })

    useEffect(() => {
        const GetProducts = async (category) => {
            const res = await axios.get(`https://dummyjson.com/products/category/${category}`)
            setProducts(res.data.products)
        }

        GetProducts(category)
        
    }, [category])
    
    const handleListItemClick = (e, index, cate) => {
        localStorage.setItem("indexCategory", index)
        setSelectedIndex(index)

        setCategory(cate)
        localStorage.setItem("indexCategory", JSON.stringify(cate))


    }
    return (
        <div className="listproduct-section grid1400">
            <div className="grid__row">
                <div className="grid__column-2">
                    <List
                        sx={{ width: '100%', maxWidth: 280, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className="boxShadow"
                    >
                        {CategoryProductData.map((item, index) => (
                            <Link key={index} to={item.slug}>
                                <ListItemButton
                                    selected={selectedindex === index}
                                    onClick={(e) => handleListItemClick(e, index, item.slug)}
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
                <div className="grid__column-10">
                    <div className="grid__row">
                        <Routes>
                            {CategoryProductData.map((item, index) => (
                                <Route key={index} path={`/${item.slug}`} element={<ListProduct products={products} />}></Route>
                            ))}
                        </Routes>
                    </div>
                    <div className="pagination-wrapper">
                        <Pagination count={10} size="large" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListProductPage