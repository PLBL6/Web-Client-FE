const Category = ({ data }) => {
    return (
        <>
            <div className='category'>
                {data.map((value, index) => {
                    return (
                        <div className='box f_flex category-item' key={index}>
                            <i className={value.cateIcon}></i>
                            <span>{value.cateName}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Category