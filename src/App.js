import "./App.css";
import { useEffect, useState, Fragment } from "react";
import { Line } from "react-chartjs-2";
const axios = require("axios");
function App() {
  const [notes, getNotes] = useState();
  const [today, getToday] = useState({});
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
          const resp = response.data.total;
          getToday(resp);
        });
    }, MINUTE_MS);
    return () => clearInterval(interval);
  }, []);

  console.log(today);
  // for (const key in today) {
  //   date.push(key);
  //   value.push(today[key]);
  //   console.log(key);
  // }

  let label = [
    "4/8/2564",
    "5/8/2564",
    "6/8/2564",
    "7/8/2564",
    "8/8/2564",
    "9/8/2564",
    "10/8/2564",
    "11/8/2564",
    "12/8/2564",
    "13/8/2564",
    "14/8/2564",
    "15/8/2564",
    "16/8/2564",
  ];
  let value = [];
  label.map((v) => {
    console.log(today[v]);
    if (today[v] !== "undefined") {
      value.push(today[v]);
    } else {
      value.push(0);
    }
  });

  const data = {
    labels: label,
    datasets: [
      {
        label: "ยอดขายรายวัน (ใบ)",
        data: value,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };
  if (notes) {
    return (
      <Fragment>
        <div class="col-xl-3 col-sm-6">
          <div class="card-box widget-box-two widget-two-custom">
            <div class="media">
              <div
                class="
                        avatar-lg
                        rounded-circle
                        bg-primary
                        widget-two-icon
                        align-self-center
                      "
              >
                <i
                  class="
                          mdi mdi-crown
                          avatar-title
                          font-30
                          text-white
                        "
                ></i>
              </div>

              <div class="wigdet-two-content media-body">
                <p
                  class="
                          m-0
                          text-uppercase
                          font-weight-medium
                          text-truncate
                        "
                  title="Statistics"
                >
                  ลอตเตอรี่ในระบบทั้งหมด
                </p>
                <h3 class="font-weight-medium my-2">
                  <span data-plugin="counterup">
                    {notes["(4)ทั้งหมด(1+2+3=4)"]} ใบ
                  </span>
                </h3>
                <p class="m-0">งวดที่ 1 สิงหาคม</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card-box widget-box-two widget-two-custom">
            <div class="media">
              <div
                class="
                        avatar-lg
                        rounded-circle
                        bg-primary
                        widget-two-icon
                        align-self-center
                      "
              >
                <i
                  class="
                          mdi mdi-crown
                          avatar-title
                          font-30
                          text-white
                        "
                ></i>
              </div>

              <div class="wigdet-two-content media-body">
                <p
                  class="
                          m-0
                          text-uppercase
                          font-weight-medium
                          text-truncate
                        "
                  title="Statistics"
                >
                  ขายแล้ว
                </p>
                <h3 class="font-weight-medium my-2">
                  <span data-plugin="counterup">{notes["(1)ขายแล้ว"]} ใบ</span>
                </h3>
                <p class="m-0">งวดที่ 1 สิงหาคม</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card-box widget-box-two widget-two-custom">
            <div class="media">
              <div
                class="
                        avatar-lg
                        rounded-circle
                        bg-primary
                        widget-two-icon
                        align-self-center
                      "
              >
                <i
                  class="
                          mdi mdi-crown
                          avatar-title
                          font-30
                          text-white
                        "
                ></i>
              </div>

              <div class="wigdet-two-content media-body">
                <p
                  class="
                          m-0
                          text-uppercase
                          font-weight-medium
                          text-truncate
                        "
                  title="Statistics"
                >
                  รอ Approve
                </p>
                <h3 class="font-weight-medium my-2">
                  <span data-plugin="counterup">
                    {notes["(2)รอตรวจสอบ"]} ใบ
                  </span>
                </h3>
                <p class="m-0">งวดที่ 1 สิงหาคม</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card-box widget-box-two widget-two-custom">
            <div class="media">
              <div
                class="
                        avatar-lg
                        rounded-circle
                        bg-primary
                        widget-two-icon
                        align-self-center
                      "
              >
                <i
                  class="
                          mdi mdi-crown
                          avatar-title
                          font-30
                          text-white
                        "
                ></i>
              </div>

              <div class="wigdet-two-content media-body">
                <p
                  class="
                          m-0
                          text-uppercase
                          font-weight-medium
                          text-truncate
                        "
                  title="Statistics"
                >
                  ขายรวม
                </p>
                <h3 class="font-weight-medium my-2">
                  <span data-plugin="counterup">
                    {notes["(1)ขายแล้ว"] + notes["(2)รอตรวจสอบ"]} ใบ
                  </span>
                </h3>
                <p class="m-0">งวดที่ 1 สิงหาคม</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card-box widget-box-two widget-two-custom">
            <div class="media">
              <div
                class="
                        avatar-lg
                        rounded-circle
                        bg-primary
                        widget-two-icon
                        align-self-center
                      "
              >
                <i
                  class="
                          mdi mdi-crown
                          avatar-title
                          font-30
                          text-white
                        "
                ></i>
              </div>

              <div class="wigdet-two-content media-body">
                <p
                  class="
                          m-0
                          text-uppercase
                          font-weight-medium
                          text-truncate
                        "
                  title="Statistics"
                >
                  คงเหลือ
                </p>
                <h3 class="font-weight-medium my-2">
                  <span data-plugin="counterup">{notes["(3)คงเหลือ"]} ใบ</span>
                </h3>
                <p class="m-0">งวดที่ 1 สิงหาคม</p>
              </div>
            </div>
          </div>
        </div>
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
