import React from "react";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phone: "",
    };
  }
  usernameOnChange = (event) => {
    //console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  };
  passwordOnChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  inputOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submit = (event) => {
    event.preventDefault();
    var newUser = {
        id:1,
        name:this.state.name,
        addr:this.state.address,
        phono:this.state.phone
    }
  };
  render() {
    return (
      <div className="banner">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-3">
              <h4 className="text-center">User Form</h4>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="name"
                    value={this.state.name}
                    onChange={this.inputOnChange}
                    placeholder="Name"
                  ></input>
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="address"
                    value={this.state.address}
                    onChange={this.inputOnChange}
                    placeholder="Address"
                    autoComplete="new-password"
                  ></input>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.inputOnChange}
                    placeholder="Phone"
                  ></input>
                </div>
                
                <div className="row justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary col-md-6"
                    onClick={this.submit}
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormComponent;
