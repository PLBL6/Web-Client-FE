import Categories from "../components/MainPage/Categories"
import Pagination from "../components/Pagination/Pagination"
import Product from "../components/shops/Product"

const ListProduct = () => {
    return (
        <div className="listproduct-section grid1200">
            <div className="grid__row">
                <div className="grid__column-2">
                    <Categories />
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