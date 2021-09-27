import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [loginError, setLoginError] = useState();
  const name = "7idea";
  const pass = "1234";

  const _onLogin = async () => {
    if (login) return;
    const _usernameError = !username && "Please enter your username";
    const _passwordError = !password && "please enter your password";

    setUsernameError(_usernameError);
    setPasswordError(_passwordError);

    if (username === name && password === pass) {
      setLogin(true);
      console.log("true");
    } else if (username !== "" && password !== "") {
      setLogin(false);
      setLoginError("Incorrect username or password!");
      console.log("false");
    } else {
      setLogin(false);
      console.log("false");
    }
  };

  const _onKeyPress = (e) => {
    if (e.key === "Enter") {
      _onLogin();
    }
  };
  return (
    <div class="authentication-bg bg-primary authentication-bg-pattern d-flex align-items-center pb-0 vh-100">
      {/* <div class="home-btn d-none d-sm-block">
        <a href="/">
          <i class="fas fa-home h2 text-white"></i>
        </a>
      </div> */}

      <div class="account-pages w-100 mt-5 mb-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
              <div class="card mb-0">
                <div class="card-body p-4">
                  <div class="account-box">
                    <div class="account-logo-box">
                      <div class="text-center">
                        <a href="/">
                          <img
                            src="https://xn--12car4jyaq2b.com/img/logo.svg"
                            style={{ width: "70%" }}
                          />
                        </a>
                      </div>
                      <h5 class="text-uppercase mb-1 mt-4">Sign In</h5>
                      <p class="mb-0">Login to your Admin account</p>
                    </div>

                    <div class="account-content mt-4">
                      <form class="form-horizontal" action="#">
                        <div class="form-group row">
                          <div class="col-12">
                            <label>Username</label>
                            <input
                              class="form-control"
                              type="text"
                              id="emailaddress"
                              value={username}
                              required=""
                              placeholder="Enter your username"
                              onChange={(e) => setUsername(e.target.value)}
                              onKeyPress={_onKeyPress}
                            />
                            <span style={{ color: "red" }}>
                              {usernameError}
                            </span>
                          </div>
                        </div>

                        <div class="form-group row">
                          <div class="col-12">
                            <a href="/" class="text-muted float-right">
                              <small>Forgot your password ?</small>
                            </a>
                            <label>Password</label>
                            <input
                              class="form-control"
                              type="password"
                              required=""
                              id="password"
                              value={password}
                              placeholder="Enter your password"
                              onChange={(e) => setPassword(e.target.value)}
                              onKeyPress={_onKeyPress}
                            />
                            <span style={{ color: "red" }}>
                              {passwordError}
                            </span>
                          </div>
                        </div>

                        <div class="form-group row">
                          <div class="col-12">
                            <div class="checkbox checkbox-success">
                              <input id="remember" type="checkbox" />
                              <label>Remember me</label>
                            </div>
                          </div>
                        </div>
                        <span style={{ color: "red" }}>{loginError}</span>

                        <div class="form-group row text-center mt-2">
                          <div class="col-12">
                            {login === true ? (
                              <Link to="/DashboardKsl">
                                <button
                                  type="submit"
                                  class="btn btn-md btn-block btn-primary waves-effect waves-light"
                                  onClick={_onLogin}
                                  // onKeyPress={_onKeyPress}
                                >
                                  Sign In
                                </button>
                              </Link>
                            ) : (
                              <Link to="/">
                                <button
                                  class="btn btn-md btn-block btn-primary waves-effect waves-light"
                                  onClick={_onLogin}
                                  // onKeyPress={_onKeyPress}
                                >
                                  Sign In
                                </button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </form>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="text-center">
                            <button
                              type="button"
                              class="btn mr-1 btn-facebook waves-effect waves-light"
                            >
                              <i class="fab fa-facebook-f"></i>
                            </button>
                            <button
                              type="button"
                              class="btn mr-1 btn-googleplus waves-effect waves-light"
                            >
                              <i class="fab fa-google"></i>
                            </button>
                            <button
                              type="button"
                              class="btn mr-1 btn-twitter waves-effect waves-light"
                            >
                              <i class="fab fa-twitter"></i>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="row mt-4 pt-2">
                        <div class="col-sm-12 text-center">
                          <p class="text-muted mb-0">
                            Don't have an account?{" "}
                            <a href="/" class="text-dark ml-1">
                              <b>Sign Up</b>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
