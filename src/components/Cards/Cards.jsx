import React from "react";
import "./Cards.css";
import Card from "../Card/Card";

const Cards = ({ orders }) => {
  console.log("orders:", orders);
  const totalPriceOrdersAll = orders?.reduce((price, item) => price + item.tongTien, 0)
  // console.log(totalPriceOrdersAll);
  // console.log(orders?.map(item => item.tongTien));

  const orders7Day = []
  const orders30day = []
  orders?.forEach(item => {
    const previous7day = new Date()
    previous7day.setDate(previous7day.getDate() - 7)

    const previous30day = new Date()
    previous30day.setDate(previous30day.getDate() - 30)

    const dayItem = new Date(item.createdAt)

    if (dayItem > previous7day) {
      orders7Day.push(item)
    }
    if (dayItem > previous30day) {
      orders30day.push(item)
    }
  })

  console.log(orders30day?.map(item => item.tongTien));

  console.log("orders7Day:", orders7Day);
  console.log("orders30day:", orders30day);

  return (
    <div className="Cards">
      <div className="parentContainer" >
        <Card
          title={"Từ trước đến nay"}
          color={{
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
          }}
          value={totalPriceOrdersAll}
          series={[
            {
              name: "Price",
              data: orders?.map(item => item.tongTien),
            },
          ]}

          datetime={orders?.map(item => item.createdAt)}
        />
      </div>
      <div className="parentContainer" >
        <Card
          title={"Trong 7 ngày"}
          color={{
            backGround:
              "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
          }}
          value={orders7Day?.reduce((price, item) => price + item.tongTien, 0)}
          series={[
            {
              name: "Price",
              data: orders7Day?.map(item => item.tongTien),
            },
          ]}

          datetime={orders7Day?.map(item => item.createdAt)}
        />
      </div>
      <div className="parentContainer" >
        <Card
          title={"Trong 30 ngày"}
          color={{
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
          }}
          value={orders30day?.reduce((price, item) => price + item.tongTien, 0)}
          series={[
            {
              name: "Price",
              data: orders30day?.map(item => item?.tongTien),
            },
          ]}

          datetime={orders30day?.map(item => item?.createdAt)}
        />
      </div>
    </div>
  );
};

export default Cards;
