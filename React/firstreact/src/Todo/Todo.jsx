import LoginComponent from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./Home";
import PageNotFound from "./Pagenotfound";
import TodoListComponent from "./List";
import withNavigation from "./withNavigation";
import HomeWithParams from "./withParams";
import withParams from "./withParams";
import HeaderComponent from "./common/Header";
import LogoutComponent from "./common/Logout";
import Footer from "./common/Footer";

function TodoComponent() {
  const LoginWithNavigation = withNavigation(LoginComponent);
  const HomeWithParams = withParams(HomeComponent);

  return (
    <div className="App1">
      <div className="App-header">
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginWithNavigation />}></Route>
            <Route path="/login" element={<LoginWithNavigation />}></Route>
            <Route path="/home/:id" element={<HomeWithParams />}></Route>
            <Route path="list" element={<TodoListComponent />}></Route>
            <Route path="logout" element={<LogoutComponent />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}
export default TodoComponent;
