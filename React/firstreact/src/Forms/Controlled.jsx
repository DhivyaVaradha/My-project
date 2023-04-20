import React from "react";

class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginsuccess: false,
      loginfailed: false,
      validusername: false,
      validpassword: false,
      click: false,
    };
  }
  //  usernameOnChange = (event) => {
  //      //console.log(event.target.value);
  //      this.setState({
  //        username: event.target.value,
  //      });
  //    };
  //    passwordOnChange = (event) => {
  //      this.setState({
  //        password: event.target.value,
  //      });
  // };
  inputOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submit = (event) => {
    event.preventDefault();
    console.log("Username", this.state.username);
    console.log("Password", this.state.password);
    this.setState({
      click: true,
    });
    if (this.state.username == "Thiru" && this.state.password == "12345") {
      this.setState({
        loginsuccess: true,
        loginfailed: false,
      });
    } else {
      this.setState({
        loginsuccess: false,
        loginfailed: true,
      });
    }
    if (this.state.username != "" && this.state.username.length >= 6) {
      this.setState({
        validusername: true,
      });
    } else {
      this.setState({
        validusername: false,
      });
    }
    if (this.state.password != "" && this.state.password.length >= 5) {
      this.setState({
        validusername: true,
      });
    } else {
      this.setState({
        validusername: false,
      });
    }
  };

  render() {
    return (
      <div className="banner">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-3">
              <h4 className="text-center">Controlled Form</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="username"
                    value={this.state.username}
                    onChange={this.inputOnChange}
                  ></input>
                  {this.state.click && !this.state.validusername && (
                    <div className="alert-text">
                      <i class="fa-sharp fa-solid fa-triangle-person-digging"></i>
                      Your username is wrong
                    </div>
                  )}

                  {/* <div className="">
                    <i class="fa-solid fa-square"></i>
                    <label className="from-lable ms-3 mt-3">
                      Enter your username
                    </label>
                  </div> */}
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={this.state.password}
                    onChange={this.inputOnChange}
                    autoComplete="new-password"
                  ></input>
                  {this.state.click && !this.state.validpassword && (
                    <div className="alert-text">
                      <i className="fa-sharp fa-solid fa-triangle-person-digging"></i>
                      your password is wrong
                    </div>
                  )}
                </div>
                {/* <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">
                    Enter your password
                  </label>
                </div> */}
                <div className="row justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary col-md-6"
                    onClick={this.submit}
                  >
                    Submit
                  </button>
                  <LoginStatus
                    pass={this.state.loginsuccess}
                    fail={this.state.loginfailed}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function LoginStatus(props) {
  if (props.pass || props.fail) {
    return props.pass ? (
      <div className="alert alert-info text-center mt-4">Login Success</div>
    ) : (
      <div className="alert alert-danger text-center mt-4">Login Failed</div>
    );
  }
}

export default ControlledComponent;
