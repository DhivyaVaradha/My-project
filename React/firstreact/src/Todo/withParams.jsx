import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} Params={useParams()} />;
}
export default  withParams;
