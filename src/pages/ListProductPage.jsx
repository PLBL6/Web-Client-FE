import Categories from "../components/MainPage/Categories"
import { Pagination } from "@mui/material"
import Product from "../components/shops/Product"
import CategoryProductData from "../components/data/CategoryProductData"

const ListProductPage = () => {
    return (
        <div className="listproduct-section grid1400">
            <div className="grid__row">
                <div className="grid__column-2">
                    <Categories data={CategoryProductData} />
                </div>
                <div className="grid__column-10">
                    <div className="grid__row">
                        <div className="grid__column-2-4">
                            <Product />
                        </div>
                        <div className="grid__column-2-4">
                            <Product />
                        </div>
                        <div className="grid__column-2-4">
                            <Product />
                        </div>
                        <div className="grid__column-2-4">
                            <Product />
                        </div>
                        <div className="grid__column-2-4">
                            <Product />
                        </div>
                        <div className="grid__column-2-4">
                            <Product />
                        </div>
                        <div className="grid__column-2-4">
                            <Product />
                        </div>
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