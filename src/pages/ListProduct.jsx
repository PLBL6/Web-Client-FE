import Categories from "../components/MainPage/Categories"
import Pagination from "../components/Pagination/Pagination"
import Product from "../components/shops/Product"
import CategoryProductData from "../components/data/CategoryProductData"

const ListProduct = () => {
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
                    <Pagination/>
                </div>
            </div>
        </div>
    )
}

export default ListProduct