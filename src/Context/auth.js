exports.fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    // console.log("au: true");
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    // console.log("au: false");
    setTimeout(cb, 100);
  },
  getLocalStorage_IsAuthenticated() {
    if (localStorage.getItem("isAuthenticated") === "true") {
      this.authenticate();
    } else {
      this.signout();
    }
  },
  setLocalStorage_IsAuthenticated(value) {
    localStorage.setItem("isAuthenticated", value);
  }
};
