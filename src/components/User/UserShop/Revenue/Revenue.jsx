import Cards from "../../../Cards/Cards";

function Revenue({ orders }) {
    return (
        <div className="Revenue-section">
            <Cards orders={orders} />
        </div>
    );
}

export default Revenue;