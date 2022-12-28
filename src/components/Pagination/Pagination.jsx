const Pagination = () => {
    return (
        <ul className="pagination mtop">
            <li className="pagination-item">
                <a href="/" className="pagination-item__link">
                    <i className="pagination-item__icon fa-solid fa-angle-left"></i>
                </a>
            </li>

            <li className="pagination-item pagination-item__link--current">
                <a href="/" className="pagination-item__link ">1</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item__link">2</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item__link">3</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item__link">4</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item__link">5</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item__link">...</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item__link">10</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item__link">
                    <i className="pagination-item__icon fa-solid fa-angle-right"></i>
                </a>
            </li>
        </ul>
    )
}

export default Pagination 