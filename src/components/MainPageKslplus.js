import { useEffect, useState, Fragment } from "react";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "chartjs-plugin-datalabels";
import { Chart } from "chart.js";
import HeaderKslplus from "../styles/HeaderKslplus";
import CheckableTag from "antd/lib/tag/CheckableTag";
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
                {[data.saleordercount].toLocaleString()} order
              </p>
              {/* {console.log("test", [data.saleordercount].toLocaleString())} */}
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
  const [lotteryHour, getLotteryHour] = useState({});
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
    axios
      .get(
        "https://asia-east2-kslplus.cloudfunctions.net/api/v1/serviceStatus/count-lottery-hour"
      )
      .then((response) => {
        const resp = response.data;
        getLotteryHour(resp);
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

      axios
        .get(
          "https://asia-east2-kslplus.cloudfunctions.net/api/v1/serviceStatus/count-lottery-hour"
        )
        .then((response) => {
          const resp = response.data;
          getLotteryHour(resp);
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
        // if (element[0].datasetIndex === 0) {
        //   return null;
        // }

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
        formatter: function (value, context) {
          return value.toLocaleString().replaceAll(",", ",");
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
        formatter: function (value, context) {
          return value.toLocaleString().replaceAll(" ", " ");
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
  let dataSum = {};
  Object.entries(orderHour).forEach(([key, val]) => {
    if (key.slice(0, -6).localeCompare(test) === 0) {
      dataSum[key] = val.split(",");
      //console.log();
    }
  });
  let dataSum2 = {};
  Object.entries(lotteryHour).forEach(([key2, val2]) => {
    if (key2.slice(0, -6).localeCompare(test) === 0) {
      dataSum2[key2] = val2.split(",");
    }
  });
  //console.log("dataSum2", dataSum2);

  const sortedSum = Object.keys(dataSum)
    .sort()
    .reduce((last, curre) => {
      last[curre] = dataSum[curre];
      return last;
    }, {});
  const sortedSum2 = Object.keys(dataSum2)
    .sort()
    .reduce((last, curre) => {
      last[curre] = dataSum2[curre];
      return last;
    }, {});
  //console.log("sortedSum2", sortedSum2);

  const dataDateTime = Object.keys(sortedSum);
  console.log("dataDateTime", dataDateTime);
  const timeHour = dataDateTime.map((s) => s.slice(10));
  const dataMinute = Object.values(sortedSum);
  const sum = dataMinute.map((p) =>
    p.reduce((prev, curr) => prev + parseInt(curr), 0)
  );
  const dataMinute2 = Object.values(sortedSum2);
  const sum2 = dataMinute2.map((p) =>
    p.reduce((prev, curr) => prev + parseInt(curr), 0)
  );

  const data = {
    labels: day,
    datasets: [
      {
        label: "ยอดขายรายวัน (ใบ)",
        data: value,
        fill: false,
        backgroundColor: "#7DCEA0",
        borderColor: "#7DCEA0",
        pointStyle: "circle",
        pointBackgroundColor: "#229954",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: "จำนวน transection",
        data: transection,
        fill: false,
        backgroundColor: "#F8BBD0",
        borderColor: "#F8BBD0",
        pointStyle: "rect",
        pointBackgroundColor: "#EC407A",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  const data2 = {
    labels: timeHour,
    datasets: [
      {
        label: "ยอดขายรายชั่วโมง วันที่ " + dateClicked + " (ใบ)",
        data: sum2,
        fill: false,
        backgroundColor: "#7DCEA0",
        borderColor: "#7DCEA0",
        pointStyle: "circle",
        pointBackgroundColor: "#229954",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: "จำนวน transection",
        data: sum,
        fill: false,
        backgroundColor: "#F48FB1",
        borderColor: "#F48FB1",
        pointStyle: "rect",
        pointBackgroundColor: "#EC407A",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  const data3 = {
    labels: minArr,
    datasets: [
      {
        label: "ยอดขายรายนาที เวลา " + hourClicked + " น. (ใบ)",
        data: dataMinute2[minuteClicked],
        fill: false,
        backgroundColor: "#7DCEA0",
        borderColor: "#7DCEA0",
        pointStyle: "circle",
        pointBackgroundColor: "#229954",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: "จำนวน transection",
        data: dataMinute[minuteClicked],
        fill: false,
        backgroundColor: "#F48FB1",
        borderColor: "#F48FB1",
        pointStyle: "rect",
        pointBackgroundColor: "#EC407A",
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
          size: 10,
        },
        formatter: function (value, context) {
          return value.toLocaleString().replaceAll(",", ",");
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
        <StatCol
          sale={notes["(4)ทั้งหมด(1+2+3=4)"].toLocaleString()}
          name="ลอตเตอรี่ทั้งหมด"
          saleordercount="0"
        ></StatCol>
        <StatCol
          sale={notes["(1)ขายแล้ว"].toLocaleString()}
          name="ขายแล้ว"
          saleordercount={orderCount["success"]}
        ></StatCol>
        <StatCol
          sale={notes["(2)รอตรวจสอบ"].toLocaleString()}
          name="รอตรวจสอบ"
          saleordercount={orderCount["confirmed"]}
        ></StatCol>
        <StatCol
          sale={[notes["(1)ขายแล้ว"] + notes["(2)รอตรวจสอบ"]].toLocaleString()}
          name="ขายรวม"
          saleordercount={orderCount["confirmed"] + orderCount["success"]}
        ></StatCol>
        <StatCol
          sale={notes["(3)คงเหลือ"].toLocaleString()}
          name="คงเหลือ"
          saleordercount="0"
        ></StatCol>

        <div class="col-xl-12">
          <div class="card-box widget-box-two widget-two-custom">
            <Line
              data={data}
              options={lineOptions}
              // plugins={[ChartDataLabels]}
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
