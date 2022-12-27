import Product from "./Product"


const ListProduct = ({ products, loading }) => {
    return (
        <>
            {loading ? <div className="loading"></div>
                :
                <>
                    {products.map((shopItems, index) => (
                        <div className="grid__column-2-4" key={index} style={{ marginBottom: "10px" }} >
                            <Product shopItems={shopItems} />
                        </div>
                    ))}

                </>
            }
        </>
    )
}

export default ListProduct