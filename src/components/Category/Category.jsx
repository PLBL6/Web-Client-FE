import { Link } from "react-router-dom"

const Category = ({ data }) => {

    const handleLinkActive = (e, index) => {
        localStorage.setItem("indexCategory", index)
    }
    return (
        <>
            <div className='category' style={{marginTop:"12px"}}>
                {data.map((value, index) => {
                    return (
                        <Link onClick={e => handleLinkActive(e,value.id)} to={`category/${value.id}`} className='box f_flex category-item' key={index}>
                            <img src={value.cateImg} alt="icon" />
                            <span>{value.cateName}</span>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Category