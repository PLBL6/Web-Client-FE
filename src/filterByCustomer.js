export function filterByCustomer(orders) {
    const result = []
    orders.forEach((item, index) => {
        const { ChiTietDonHangData, maMHName, maMHhinhAnh, } = item
        const newItemToPush = { maMHName, maMHhinhAnh, ChiTietDonHangData }
        if (result.some(sub => sub["khachHang"]["id"] === item.khachHang)) {
            result.find(i => i?.khachHang?.id === item.khachHang)?.order.push(newItemToPush)
        }
        else {
            let resultItem = {
                "khachHang": {
                    "id": item.khachHang,
                    "nameCustomer": item.khachHangName,
                    "avatar": item.khachHanganhDaiDien
                },
                "order": [newItemToPush]
            }
            result.push(resultItem)
        }
    })
    return result
}




