class Authentication {
  setLoogedInUser(username) {
    sessionStorage.setitem("authenticatedUser", username);
  }
  getloggedInUser() {
    let loggedInUser = sessionStorage.getItem("authenticatedUser");
    return loggedInUser;
  }
  isUserLoggedIn() {
    let user = getLoggedInUser();

    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
export default Authentication;
