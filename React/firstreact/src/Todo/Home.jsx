//import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function HomeComponent(props) {
  //const navigate = useNavigate();
  return (
    <div className="row mt-5 justify-content-center">
      <h3>Welcome To {props.Params.id}</h3>
      <Link to="/list" className="btn btn-primary btn-lg">
        Go to list{" "}
      </Link>
    </div>
  );
}
export default HomeComponent;
