import { Link } from "react-router-dom";

function LogoutComponent() {
  return (
    <div className="row mt-5 justify-content-center">
      <h3>You are logged out Successfully</h3>
      <Link to="/login" className="btn btn-primary btn-lg">
        Go to Login page
      </Link>
    </div>
  );
}
export default LogoutComponent;
