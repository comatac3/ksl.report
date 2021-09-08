import "./App.css";
import { useEffect, useState, Fragment } from "react";
import { Line } from "react-chartjs-2";
const axios = require("axios");
let date = new Date();
let thaiYear = date.getFullYear() + 543;
let month = date.getMonth() + 1;
let daysOfMonth = new Date(date.getYear(), date.getMonth(), 0).getDate();

//prepairing date
let dayArr = [];
let day = 1;
for (day = 1; day <= daysOfMonth; day++) {
  dayArr.push(day + "/" + month + "/" + thaiYear);
}
//css
const boldcss = {
  fontWeight: 900,
};

//StatCol component
function StatCol(data) {
  return (
    <Fragment>
      <div className="col-xl-3 col-sm-6">
        <div className="card-box widget-box-two widget-two-custom">
          <div className="media">
            <div
              className="
                        avatar-lg
                        rounded-circle
                        bg-primary
                        widget-two-icon
                        align-self-center
                      "
            >
              <i
                className="
                          mdi mdi-crown
                          avatar-title
                          font-30
                          text-white
                        "
              ></i>
            </div>

            <div className="wigdet-two-content media-body">
              <p
                className="
                          m-0
                          text-uppercase
                          font-weight-medium
                          text-truncate
                        "
                title="Statistics"
              >
                {data.name}
              </p>
              <h3 className="font-weight-medium my-2">
                <span data-plugin="counterup">
                  {data.sale} ใบ<br></br>
                </span>
              </h3>
              <p className="m-0" style={boldcss}>
                {data.saleordercount} order
              </p>
              {/* <p class="m-0">งวดที่ 1 สิงหาคม</p> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
function App() {
  // let fullReportData = {
  //   totalLottery: 0,
  //   saleSuccess: 0,
  //   waitingForApprove: 0,
  //   totalSale: 0,
  //   remain: 0,
  //   saleSuccessOrder: 0,
  //   waitingForApproveOrder: 0,
  //   totalSaleOrder: 0,
  // };
  const [notes, getNotes] = useState();
  const [today, getToday] = useState({});
  const [orderdate, getOrderDate] = useState({});
  const [orderCount, getOrderCount] = useState({
    success: "waiting",
    confirmed: "waiting",
  });
  const MINUTE_MS = 600000;
  useEffect(() => {
    axios
      .get(
        "https://asia-east2-kslproject.cloudfunctions.net/api/v1/serviceStatus/count-lottery"
      )
      .then((response) => {
        const resp = response.data;
        getNotes(resp);
      });
    axios
      .get(
        "https://asia-east2-kslproject.cloudfunctions.net/api/v1/serviceStatus/count-lottery-date"
      )
      .then((response) => {
        const resp = response.data;
        getToday(resp);
      });

    axios
      .get(
        "https://asia-east2-kslproject.cloudfunctions.net/api/v1/serviceStatus/count-order-date"
      )
      .then((response) => {
        const resp = response.data;
        getOrderDate(resp);
      });

    axios
      .get(
        "https://asia-east2-kslproject.cloudfunctions.net/api/v1/serviceStatus/count-order-count"
      )
      .then((response) => {
        const resp = response.data;
        getOrderCount(resp);
      });
    const interval = setInterval(() => {
      axios
        .get(
          "https://asia-east2-kslproject.cloudfunctions.net/api/v1/serviceStatus/count-lottery"
        )
        .then((response) => {
          const resp = response.data;
          getNotes(resp);
        });
      axios
        .get(
          "https://asia-east2-kslproject.cloudfunctions.net/api/v1/serviceStatus/count-lottery-date"
        )
        .then((response) => {
          const resp = response.data;
          getToday(resp);
        });

      axios
        .get(
          "https://asia-east2-kslproject.cloudfunctions.net/api/v1/serviceStatus/count-order-date"
        )
        .then((response) => {
          const resp = response.data;
          getOrderDate(resp);
        });

      axios
        .get(
          "https://asia-east2-kslproject.cloudfunctions.net/api/v1/serviceStatus/count-order-count"
        )
        .then((response) => {
          const resp = response.data;
          getOrderCount(resp);
        });
    }, MINUTE_MS);
    return () => clearInterval(interval);
  }, []);

  console.log(today);

  let value = [];
  let transection = [];
  dayArr.map((v) => {
    if (today[v] !== "undefined") {
      value.push(today[v]);
    } else {
      value.push(0);
    }
    if (orderdate[v] !== "undefined") {
      transection.push(orderdate[v]);
    } else {
      transection.push(0);
    }
  });

  const data = {
    labels: dayArr,
    datasets: [
      {
        label: "ยอดขายรายวัน (ใบ)",
        data: value,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "จำนวน transection",
        data: transection,
        fill: false,
        backgroundColor: "rgb(100, 197, 177)",
        borderColor: "rgba(100, 197, 177, 0.2)",
      },
    ],
  };
  if (notes) {
    return (
      <Fragment>
        {console.log(notes)}
        <StatCol
          sale={notes["(4)ทั้งหมด(1+2+3=4)"]}
          name="ลอตเตอรี่ทั้งหมด"
          saleordercount="..."
        ></StatCol>
        <StatCol
          sale={notes["(1)ขายแล้ว"]}
          name="ขายแล้ว"
          saleordercount={orderCount["success"]}
        ></StatCol>
        <StatCol
          sale={notes["(2)รอตรวจสอบ"]}
          name="รอตรวจสอบ"
          saleordercount={orderCount["confirmed"]}
        ></StatCol>
        <StatCol
          sale={notes["(1)ขายแล้ว"] + notes["(2)รอตรวจสอบ"]}
          name="ขายรวม"
          saleordercount={orderCount["confirmed"] + orderCount["success"]}
        ></StatCol>
        <StatCol
          sale={notes["(3)คงเหลือ"]}
          name="ลอตเตอรี่ทั้งหมด"
          saleordercount="..."
        ></StatCol>

        <div class="col-xl-12">
          <div class="card-box widget-box-two widget-two-custom">
            <Line data={data} />
            {console.log(today)}
          </div>
        </div>
      </Fragment>
    );
  } else {
    return <div>waiting</div>;
  }
}
export default App;
