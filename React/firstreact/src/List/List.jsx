import React from "react";
import FormComponent from "./Form";

class ListMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Thiru",
          addr: "Perambalur",
          phono: 9080419011,
        },
        {
          id: 2,
          name: "Deepa",
          addr: "Kurumbalur",
          phono: 9843420745,
        },
        {
          id: 3,
          name: "Dhivya",
          addr: "Palayam",
          phono: 7010140899,
        },
        {
          id: 4,
          name: "Deena",
          addr: "Trichy",
          phono: 8489698106,
        },
        {
          id: 5,
          name: "Sabari",
          addr: "Vilupuram",
          phono: 9566841599,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <FormComponent />
          <table className="table table-striped table-dark mt-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.addr}</td>
                  <td>{user.phono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default ListMainComponent;
