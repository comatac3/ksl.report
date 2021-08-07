import "./App.css";
import { useEffect, useState, Fragment } from "react";
const axios = require("axios");
function App() {
  const [notes, getNotes] = useState();
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
    const interval = setInterval(() => {
      axios
        .get(
          "https://asia-east2-kslproject.cloudfunctions.net/api/v1/serviceStatus/count-lottery"
        )
        .then((response) => {
          const resp = response.data;
          getNotes(resp);
        });
    }, MINUTE_MS);
    return () => clearInterval(interval);
  }, []);
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
      </Fragment>
      // <div className="App">
      //   <div className="row">
      //     <div
      //       className="col-md-3 rounded"
      //       style={{
      //         backgroundColor: "#0b61c0",
      //         color: "white",
      //         padding: "6px",
      //       }}
      //     >
      //       <h6>ลอตเตอรี่ในระบบทั้งหมด</h6>
      //       <h1>{notes["ทั้งหมด"]}</h1>
      //     </div>
      //     <div
      //       className="col-md-3 rounded"
      //       style={{
      //         backgroundColor: "#27a745",
      //         color: "white",
      //         padding: "6px",
      //       }}
      //     >
      //       <h6>ขายแล้ว</h6>
      //       <h1>{notes["ขายแล้ว"]}</h1>
      //     </div>
      //     <div
      //       className="col-md-3 rounded"
      //       style={{
      //         backgroundColor: "#bc9315",
      //         color: "white",
      //         padding: "6px",
      //       }}
      //     >
      //       <h6>รอ Approve (Support)</h6>
      //       <h1>{notes["รอตรวจสอบ"]}</h1>
      //     </div>
      //     <div
      //       className="col-md-3 rounded gradient-bx"
      //       style={{
      //         backgroundColor: "#F46B68",
      //         color: "white",
      //         padding: "6px",
      //       }}
      //     >
      //       <h6>คงเหลือ</h6>
      //       <h1>{notes["คงเหลือ"]}</h1>
      //     </div>
      //   </div>
      // </div>
    );
  } else {
    return <div>waiting</div>;
  }
}
export default App;
