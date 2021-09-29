import React from "react";
import { Link } from "react-router-dom";
import MainPage from "../components/MainPage";

function Header() {
  return (
    <>
      <div id="wrapper">
        {/* <!-- Topbar Start --> */}
        <div class="navbar-custom headbar">
          <ul class="list-unstyled topnav-menu float-right mb-0">
            <li
              class="
              dropdown
              notification-list
              dropdown
              d-none d-lg-inline-block
              ml-2
            "
            >
              <a
                class="nav-link dropdown-toggle mr-0 waves-effect waves-light"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="assets/images/flags/us.jpg"
                  alt="lang-image"
                  height="12"
                />
              </a>
              <div class="dropdown-menu dropdown-menu-right profile-dropdown">
                {/* <!-- item--> */}
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <img
                    src="assets/images/flags/germany.jpg"
                    alt="lang-image"
                    class="mr-1"
                    height="12"
                  />
                  <span class="align-middle">German</span>
                </a>

                {/* <!-- item--> */}
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <img
                    src="assets/images/flags/italy.jpg"
                    alt="lang-image"
                    class="mr-1"
                    height="12"
                  />
                  <span class="align-middle">Italian</span>
                </a>

                {/* <!-- item--> */}
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <img
                    src="assets/images/flags/spain.jpg"
                    alt="lang-image"
                    class="mr-1"
                    height="12"
                  />
                  <span class="align-middle">Spanish</span>
                </a>

                {/* <!-- item--> */}
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <img
                    src="assets/images/flags/russia.jpg"
                    alt="lang-image"
                    class="mr-1"
                    height="12"
                  />
                  <span class="align-middle">Russian</span>
                </a>
              </div>
            </li>

            <li class="dropdown notification-list">
              <a
                class="nav-link dropdown-toggle waves-effect waves-light"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i class="dripicons-bell noti-icon"></i>
                <span class="badge badge-pink rounded-circle noti-icon-badge">
                  4
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-lg">
                <div class="dropdown-header noti-title">
                  <h5 class="text-overflow m-0">
                    <span class="float-right">
                      <span class="badge badge-danger float-right">5</span>{" "}
                    </span>
                    Notification
                  </h5>
                </div>

                <div class="slimscroll noti-scroll">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-success">
                      <i class="mdi mdi-comment-account-outline"></i>
                    </div>
                    <p class="notify-details">
                      Robert S. Taylor commented on Admin
                      <small class="text-muted">1 min ago</small>
                    </p>
                  </a>

                  {/* <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-primary">
                      <i class="mdi mdi-settings-outline"></i>
                    </div>
                    <p class="notify-details">
                      New settings
                      <small class="text-muted">
                        There are new settings available
                      </small>
                    </p>
                  </a>

                  {/* <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-warning">
                      <i class="mdi mdi-bell-outline"></i>
                    </div>
                    <p class="notify-details">
                      Updates
                      <small class="text-muted">
                        There are 2 new updates available
                      </small>
                    </p>
                  </a>

                  {/* <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon">
                      <img
                        src="assets/images/users/avatar-4.jpg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="notify-details">Karen Robinson</p>
                    <p class="text-muted mb-0 user-msg">
                      <small>
                        Wow ! this admin looks good and awesome design
                      </small>
                    </p>
                  </a>

                  {/* <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-danger">
                      <i class="mdi mdi-account-plus"></i>
                    </div>
                    <p class="notify-details">
                      New user
                      <small class="text-muted">
                        You have 10 unread messages
                      </small>
                    </p>
                  </a>

                  {/* <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-info">
                      <i class="mdi mdi-comment-account-outline"></i>
                    </div>
                    <p class="notify-details">
                      Caleb Flakelar commented on Admin
                      <small class="text-muted">4 days ago</small>
                    </p>
                  </a>

                  {/* <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-secondary">
                      <i class="mdi mdi-heart"></i>
                    </div>
                    <p class="notify-details">
                      Carlos Crouch liked
                      <b>Admin</b>
                      <small class="text-muted">13 days ago</small>
                    </p>
                  </a>
                </div>

                {/* <!-- All--> */}
                <a
                  href="javascript:void(0);"
                  class="
                  dropdown-item
                  text-center text-primary
                  notify-item notify-all
                "
                >
                  View all
                  <i class="fi-arrow-right"></i>
                </a>
              </div>
            </li>

            <li class="dropdown notification-list">
              <a
                class="
                nav-link
                dropdown-toggle
                nav-user
                mr-0
                waves-effect waves-light
              "
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="assets/images/users/avatar-1.jpg"
                  alt="user-image"
                  class="rounded-circle"
                />
                <span class="pro-user-name ml-1">
                  Maxine K <i class="mdi mdi-chevron-down"></i>
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right profile-dropdown">
                {/* <!-- item--> */}
                <div class="dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Welcome !</h6>
                </div>

                {/* <!-- item--> */}
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="fe-user"></i>
                  <span>Profile</span>
                </a>

                {/* <!-- item--> */}
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="fe-settings"></i>
                  <span>Settings</span>
                </a>

                {/* <!-- item--> */}
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="fe-lock"></i>
                  <span>Lock Screen</span>
                </a>

                <div class="dropdown-divider"></div>

                {/* <!-- item--> */}
                <a href="/" class="dropdown-item notify-item">
                  <i class="fe-log-out"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>

            <li class="dropdown notification-list">
              <a
                href="javascript:void(0);"
                class="nav-link right-bar-toggle waves-effect waves-light"
              >
                <i class="fe-settings noti-icon"></i>
              </a>
            </li>
          </ul>

          {/* <!-- LOGO --> */}
          <div class="logo-box">
            <a href="/DashboardKsl" class="logo text-center">
              <span class="logo-lg">
                <img
                  src="https://xn--12car4jyaq2b.com/img/logo.svg"
                  alt=""
                  height="25"
                />
                {/* <!-- <span class="logo-lg-text-light">UBold</span> --> */}
              </span>
              <span class="logo-sm">
                {/* <!-- <span class="logo-sm-text-dark">U</span> --> */}
                <img
                  src="https://xn--12car4jyaq2b.com/img/logo.svg"
                  alt=""
                  height="28"
                />
              </span>
            </a>
          </div>

          <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
              <button class="button-menu-mobile waves-effect waves-light">
                <i class="fe-menu"></i>
              </button>
            </li>

            <li class="d-none d-sm-block">
              <form class="app-search">
                <div class="app-search-box">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search..."
                    />
                    <div class="input-group-append">
                      <button class="btn" type="submit">
                        <i class="fe-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </li>
          </ul>
        </div>
        {/* <!-- end Topbar --> */}

        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div class="left-side-menu headbar">
          <div class="slimscroll-menu">
            {/* <!--- Sidemenu --> */}
            <div id="sidebar-menu">
              <ul class="metismenu" id="side-menu">
                <li class="menu-title">Navigation</li>

                <li>
                  <a href="javascript: void(0);">
                    <i class="fe-airplay"></i>
                    <span class="badge badge-success badge-pill float-right">
                      2
                    </span>
                    <span> Dashboard </span>
                  </a>
                  <ul class="nav-second-level" aria-expanded="false">
                    <li>
                      <a href="/DashboardKsl">Kongsalak</a>
                    </li>
                    <li>
                      <a href="/DashboardKslplus">KongsalakPlus</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <!-- End Sidebar --> */}

            <div class="clearfix"></div>
          </div>
          {/* <!-- Sidebar -left --> */}
        </div>
        {/* <!-- Left Sidebar End --> */}

        {/* <!-- ============================================================== --> */}
        {/* <!-- Start Page Content here --> */}
        {/* <!-- ============================================================== --> */}

        <div class="content-page">
          <div class="content">
            {/* <!-- Start Content--> */}
            <div class="container-fluid">
              {/* <!-- start page title --> */}
              <div class="row headbar">
                <div class="col-12">
                  <div class="page-title-box">
                    <div class="page-title-right">
                      <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item">
                          <a href="javascript: void(0);">Adminox</a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="javascript: void(0);">Dashboard</a>
                        </li>
                        <li class="breadcrumb-item active">Dashboard 1</li>
                      </ol>
                    </div>
                    <h4 class="page-title">Kongsalak</h4>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}
              {/* 
              <div id="root"></div> */}
              <div class="row">
                <MainPage />
              </div>

              {/* <!-- end row --> */}

              {/* <!-- end row --> */}

              {/* <!--- end row --> */}
            </div>
            {/* <!-- end container-fluid --> */}
          </div>
          {/* <!-- end content --> */}

          {/* <!-- Footer Start --> */}
          <footer class="footer headbar">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">Kongsalak Report</div>
              </div>
            </div>
          </footer>
          {/* <!-- end Footer --> */}
        </div>

        {/* <!-- ============================================================== --> */}
        {/* <!-- End Page content --> */}
        {/* <!-- ============================================================== --> */}
      </div>

      <div class="right-bar">
        <div class="rightbar-title">
          <a href="javascript:void(0);" class="right-bar-toggle float-right">
            <i class="mdi mdi-close"></i>
          </a>
          <h4 class="font-16 m-0 text-white">Theme Customizer</h4>
        </div>
        <div class="slimscroll-menu">
          <div class="p-3">
            <div class="alert alert-warning" role="alert">
              <strong>Customize </strong> the overall color scheme, layout, etc.
            </div>
            <div class="mb-2">
              <img
                src="assets/images/layouts/light.png"
                class="img-fluid img-thumbnail"
                alt=""
              />
            </div>
            <div class="custom-control custom-switch mb-3">
              <input
                type="checkbox"
                class="custom-control-input theme-choice"
                id="light-mode-switch"
                // checked
              />
              <label class="custom-control-label" for="light-mode-switch">
                Light Mode
              </label>
            </div>

            <div class="mb-2">
              <img
                src="assets/images/layouts/dark.png"
                class="img-fluid img-thumbnail"
                alt=""
              />
            </div>
            <div class="custom-control custom-switch mb-3">
              <input
                type="checkbox"
                class="custom-control-input theme-choice"
                id="dark-mode-switch"
                data-bsStyle="assets/css/bootstrap-dark.min.css"
                data-appStyle="assets/css/app-dark.min.css"
              />
              <label class="custom-control-label" for="dark-mode-switch">
                Dark Mode
              </label>
            </div>

            <div class="mb-2">
              <img
                src="assets/images/layouts/rtl.png"
                class="img-fluid img-thumbnail"
                alt=""
              />
            </div>
            <div class="custom-control custom-switch mb-3">
              <input
                type="checkbox"
                class="custom-control-input theme-choice"
                id="rtl-mode-switch"
                data-appStyle="assets/css/app-rtl.min.css"
              />
              <label class="custom-control-label" for="rtl-mode-switch">
                RTL Mode
              </label>
            </div>

            <div class="mb-2">
              <img
                src="assets/images/layouts/dark-rtl.png"
                class="img-fluid img-thumbnail"
                alt=""
              />
            </div>
            <div class="custom-control custom-switch mb-5">
              <input
                type="checkbox"
                class="custom-control-input theme-choice"
                id="dark-rtl-mode-switch"
                data-bsStyle="assets/css/bootstrap-dark.min.css"
                data-appStyle="assets/css/app-dark-rtl.min.css"
              />
              <label class="custom-control-label" for="dark-rtl-mode-switch">
                Dark RTL Mode
              </label>
            </div>

            <a
              href="https://1.envato.market/y2YAD"
              class="btn btn-danger btn-block mt-3"
              target="_blank"
            >
              <i class="mdi mdi-download mr-1"></i> Download Now
            </a>
          </div>
        </div>
      </div>
      <div class="rightbar-overlay"></div>
    </>
  );
}

export default Header;
