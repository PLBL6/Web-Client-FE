export function filterByShop(carts) {
    const result = []
    carts.forEach((item, index) => {
        const {nhaCungCap , ...newItemToPush} = item
        if (result.some( sub => sub["nhaCungCap"]["id"] === item.nhaCungCap.id)){
            result.find(i => i?.nhaCungCap?.id === item.nhaCungCap.id)?.product.push(newItemToPush)
        }
        else {
            let resultItem = {
                "nhaCungCap": item.nhaCungCap,
                "product": [newItemToPush]
            }
            result.push(resultItem)
        }
    })
    return result
}




