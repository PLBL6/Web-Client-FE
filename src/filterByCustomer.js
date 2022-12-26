export function filterByCustomer(orders) {
    const result = []
    orders.forEach((item, index) => {
        const { khachHangId, khachHangName, khachHanganhDaiDien, khachHangDiaChi, khachHangPhone, ...newItemToPush } = item
        // const newItemToPush = { maMHName, maMHhinhAnh, ChiTietDonHangData }
        if (result.some(sub => sub["khachHang"]["id"] === item.khachHangId)) {
            result.find(i => i?.khachHang?.id === item.khachHangId)?.order.push({ ...newItemToPush, khachHangId })
        }
        else {
            let resultItem = {
                "khachHang": {
                    "id": item.khachHangId,
                    "nameCustomer": item.khachHangName,
                    "avatar": item.khachHanganhDaiDien,
                    "phoneNumber": khachHangPhone,
                    "address": khachHangDiaChi
                },
                "order": [{ ...newItemToPush, khachHangId }]
            }
            result.push(resultItem)
        }
    })
    return result
}




