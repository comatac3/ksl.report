import { useEffect, useState, Fragment } from "react";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "chartjs-plugin-datalabels";
import { Chart } from "chart.js";
import HeaderKslplus from "../styles/HeaderKslplus";
Chart.register(ChartDataLabels);

const axios = require("axios");
let date = new Date();
let thaiYear = date.getFullYear() + 543;
let month = date.getMonth() + 1;
let daysOfMonth = new Date(date.getYear(), date.getMonth(), 0).getDate();

//prepairing date
// let dayArr = [];
// let day = 1;
// for (day = 1; day <= daysOfMonth; day++) {
//   dayArr.push(day + "/" + month + "/" + thaiYear);
// }
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
function MainPageKslplus() {
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
  const [orderHour, getOrderHour] = useState({});
  const [orderCount, getOrderCount] = useState({
    success: "waiting",
    confirmed: "waiting",
  });
  const MINUTE_MS = 600000;
  const [dateClicked, getDateClicked] = useState("");
  const [minuteClicked, getMinuteClicked] = useState("");
  const [hourClicked, getHourClicked] = useState("");
  const [clicktable, getClickTable] = useState(true);
  const pathname = window.location.pathname;

  let minArr = [];
  let min = 1;
  for (min = 1; min <= 60; min++) {
    minArr.push(min);
  }

  useEffect(() => {
    axios
      .get(
        "https://asia-east2-kslplus.cloudfunctions.net/api/v1/serviceStatus/count-lottery"
      )
      .then((response) => {
        const resp = response.data;
        getNotes(resp);
      });
    axios
      .get(
        "https://asia-east2-kslplus.cloudfunctions.net/api/v1/serviceStatus/count-lottery-date"
      )
      .then((response) => {
        const resp = response.data;
        getToday(resp);
      });

    axios
      .get(
        "https://asia-east2-kslplus.cloudfunctions.net/api/v1/serviceStatus/count-order-date"
      )
      .then((response) => {
        const resp = response.data;
        getOrderDate(resp);
      });

    axios
      .get(
        "https://asia-east2-kslplus.cloudfunctions.net/api/v1/serviceStatus/count-order-count"
      )
      .then((response) => {
        const resp = response.data;
        getOrderCount(resp);
      });
    axios
      .get(
        "https://asia-east2-kslplus.cloudfunctions.net/api/v1/serviceStatus/count-order-hour"
      )
      .then((response) => {
        const resp = response.data;
        getOrderHour(resp);
      });

    const interval = setInterval(() => {
      axios
        .get(
          "https://asia-east2-kslplus.cloudfunctions.net/api/v1/serviceStatus/count-lottery"
        )
        .then((response) => {
          const resp = response.data;
          getNotes(resp);
        });
      axios
        .get(
          "https://asia-east2-kslplus.cloudfunctions.net/api/v1/serviceStatus/count-lottery-date"
        )
        .then((response) => {
          const resp = response.data;
          getToday(resp);
        });

      axios
        .get(
          "https://asia-east2-kslplus.cloudfunctions.net/api/v1/serviceStatus/count-order-date"
        )
        .then((response) => {
          const resp = response.data;
          getOrderDate(resp);
        });

      axios
        .get(
          "https://asia-east2-kslplus.cloudfunctions.net/api/v1/serviceStatus/count-order-count"
        )
        .then((response) => {
          const resp = response.data;
          getOrderCount(resp);
        });

      axios
        .get(
          "https://asia-east2-kslplus.cloudfunctions.net/api/v1/serviceStatus/count-order-hour"
        )
        .then((response) => {
          const resp = response.data;
          getOrderHour(resp);
        });
    }, MINUTE_MS);
    return () => clearInterval(interval);
  }, []);

  const day = Object.keys(today);

  var sortedDay = day.sort(function (a, b) {
    var aComps = a.split("/");
    var bComps = b.split("/");
    var aDate = new Date(aComps[2], aComps[1], aComps[0]);
    var bDate = new Date(bComps[2], bComps[1], bComps[0]);
    return aDate.getTime() - bDate.getTime();
  });

  let value = [];
  let transection = [];
  day.map((v) => {
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

  const lineOptions = {
    onClick: (e, element) => {
      getClickTable(true);
      console.log("e", e);
      console.log("element", element);
      if (element.length === 0) {
        return null;
      }

      if (element.length !== 0) {
        if (element[0].datasetIndex === 0) {
          return null;
        }

        (async () => {
          const index = element[0]["index"];
          const date = e.chart.data.labels[index];
          getDateClicked(date);
        })();
      }
    },
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        align: "end",
        font: {
          size: 12,
        },
      },
      title: {
        display: true,
        padding: {
          bottom: 3,
        },
        weight: "bold",
        align: "start",
      },
    },
  };

  const lineOptions2 = {
    onClick: (e, element) => {
      getClickTable(false);
      if (element.length === 0) {
        return null;
      }

      if (element.length !== 0) {
        (async () => {
          const index = element[0]["index"];
          const hour = e.chart.data.labels[index];
          getHourClicked(hour);
          getMinuteClicked(index);
        })();
      }
    },

    plugins: {
      datalabels: {
        display: true,
        color: "black",
        align: "end",
        font: {
          size: 10,
        },
      },
      title: {
        display: true,
        padding: {
          bottom: 3,
        },
        weight: "bold",
        align: "start",
      },
    },
  };

  let test = dateClicked;
  const dataSum = {};
  Object.entries(orderHour).forEach(([key, val]) => {
    if (key.slice(0, -6).localeCompare(test) === 0) {
      dataSum[key] = val.split(",");
    }
  });

  const sortedSum = Object.keys(dataSum)
    .sort()
    .reduce((last, curre) => {
      last[curre] = dataSum[curre];
      return last;
    }, {});

  const dataDateTime = Object.keys(sortedSum);
  const timeHour = dataDateTime.map((s) => s.slice(10));
  const dataMinute = Object.values(sortedSum);
  const sum = dataMinute.map((p) =>
    p.reduce((prev, curr) => prev + parseInt(curr), 0)
  );

  const data = {
    labels: day,
    datasets: [
      {
        label: "ยอดขายรายวัน (ใบ)",
        data: value,
        fill: false,
        backgroundColor: "rgb(100, 197, 177)",
        borderColor: "rgba(100, 197, 177, 0.2)",
        pointStyle: "circle",
        pointBackgroundColor: "rgb(0,222,0)",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: "จำนวน transection",
        data: transection,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        pointStyle: "rect",
        pointBackgroundColor: "rgb(220,20,60)",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  const data2 = {
    labels: timeHour,
    datasets: [
      {
        label: "จำนวน transection วันที่ " + dateClicked,
        data: sum,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        pointStyle: "rect",
        pointBackgroundColor: "rgb(220,20,60)",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  const data3 = {
    labels: minArr,
    datasets: [
      {
        label: "จำนวน transection เวลา " + hourClicked + " น.",
        data: dataMinute[minuteClicked],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        pointStyle: "rect",
        pointBackgroundColor: "rgb(220,20,60)",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };
  const showData = {
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        align: "end",
        font: {
          size: 9,
        },
      },
      title: {
        display: true,
        padding: {
          bottom: 3,
        },
        weight: "bold",
        align: "start",
      },
    },
  };

  if (notes && pathname === "/DashboardKslplus") {
    return (
      <Fragment>
        <HeaderKslplus />
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
          name="คงเหลือ"
          saleordercount="..."
        ></StatCol>

        <div class="col-xl-12">
          <div class="card-box widget-box-two widget-two-custom">
            <Line
              data={data}
              options={lineOptions}
              plugins={[ChartDataLabels]}
            />
            {dateClicked !== "" && (
              <Line
                data={data2}
                options={lineOptions2}
                style={{ marginTop: "20px" }}
              />
            )}
            {dateClicked !== "" && clicktable === false && (
              <Line
                data={data3}
                options={showData}
                style={{ marginTop: "20px" }}
              />
            )}
          </div>
        </div>
      </Fragment>
    );
  } else {
    return <div>waiting</div>;
  }
}
export default MainPageKslplus;
