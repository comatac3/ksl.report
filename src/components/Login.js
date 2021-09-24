import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const name = "meen"
  const pass = "1234"
  const pathname = window.location.pathname;

  const _onLogin = async () => {
    if (login) return;
    const _usernameError = !username && "กรุณากรอกข้อมูลชื่อบัญชีผู้ใช้";
    const _passwordError = !password && "กรุณากรอกข้อมูลรหัสผ่าน";

    setUsernameError(_usernameError);
    setPasswordError(_passwordError);

    if (username === name && password === pass) {
      setLogin(true);
      console.log("true")
    }
    else {
      setLogin(false);
      console.log("false")
    }
  };

  const _onKeyPress = (e) => {
    if (e.key === "Enter") {
      _onLogin();
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  return (
    <div class="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div class="flex-fill"></div>

      <form class="text-center flex-fill pt-3" style={{ width: "100" }}>

        <img src="https://xn--12car4jyaq2b.com/img/logo.svg" style={{ width: "50%" }} />
        <div class="card-body text-center">
          <div class="mb-3">
            <label class="form-label">ชื่อผู้ใช้</label>
            <input
              class="form-control"
              onKeyPress={_onKeyPress}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Username"
            />
            <span style={{ color: "red" }}>{usernameError}</span>
          </div>
          <div class="mb-3">
            <label class="form-label">รหัสผ่าน</label>

            <input
              class="form-control"
              onKeyPress={_onKeyPress}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
            <span style={{ color: "red" }}>{passwordError}</span>
          </div>

          {/* <button class="btn btn-primary" onClick={_onLogin} loading={login}>Login</button> */}
          {login === true ? <Link to="/home"><button class="btn btn-primary" >Login</button></Link> : (<Link to="/"><button class="btn btn-primary" onClick={_onLogin} >Login</button></Link>)}
          {/* <Link to='/home'><button class="btn btn-primary" onClick={_onLogin}>Login</button></Link> */}

        </div>
      </form>
      <div class="flex-fill"></div>
    </div>
    // <div className="h-100 row align-items-center" style={{ height: "100vh" }}>
    //   <p>Text</p>
    // </div>
    // <div class="container" style={{ height: "100vh" }}>
    //   <div class="row justify-content-center align-self-center">
    //     <div class="col-md"></div>
    //     <div class="col-md bg-danger" style={{}}>

    //     </div>
    //     <div class="col-md"></div>
    //   </div>
    // </div>


    // <div style={{ height: "100vh", background: "green", textAlign: "center" }}>

    //   {/* <div class="jumbotron bg-primary" > */}
    //   <div class="card" style={{ height: "100vh" }}>

    //     <form class="text-center" >

    //       <img src="https://xn--12car4jyaq2b.com/img/logo.svg" style={{ width: "40%" }}></img>
    //       <div class="card-body text-center">
    //         <div class="mb-3">
    //           <label class="form-label">ชื่อผู้ใช้</label>
    //           <input
    //             class="form-control"
    //             onKeyPress={_onKeyPress}
    //             onChange={(e) => setUsername(e.target.value)}
    //             value={username}
    //             placeholder="Username"
    //           />
    //           <span style={{ color: "red" }}>{usernameError}</span>
    //         </div>
    //         <div class="mb-3">
    //           <label class="form-label">รหัสผ่าน</label>

    //           <input
    //             class="form-control"
    //             onKeyPress={_onKeyPress}
    //             onChange={(e) => setPassword(e.target.value)}
    //             value={password}
    //             type="password"
    //             placeholder="Password"
    //           />
    //           <span style={{ color: "red" }}>{passwordError}</span>
    //         </div>

    //         {/* <button class="btn btn-primary" onClick={_onLogin} loading={login}>Login</button> */}
    //         {login === true ? <Link to="/home"><button class="btn btn-primary" >Login</button></Link> : (<Link to="/"><button class="btn btn-primary" onClick={_onLogin} >Login</button></Link>)}
    //         {/* <Link to='/home'><button class="btn btn-primary" onClick={_onLogin}>Login</button></Link> */}

    //       </div>
    //     </form>
    //   </div>
    // </div>

    // </div>
  )
}

export default Login;