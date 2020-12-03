var axios = require("axios");
var fd = require("form-data");

module.exports = class Pexels {
  constructor() {
    this.root = "https://www.pexels.com/api/v2";
  }

  async login(email, password) {
    this.email = email;
    this.password = password;
    var token = await axios({
      url: this.root + '/auth/sign_in',
      method: 'POST',
      data: {
        "email": this.email,
        "password": this.password
      }
    });
    this.token = token.data.token;
    this.uid = token.data["user_id"];
    return this.token;
  }
}
