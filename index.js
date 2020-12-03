var axios = require("axios");
var fd = require("form-data");
var fs = require("fs");

module.exports = class Pexels {
  constructor() {
    this.root = "https://www.pexels.com/api/v2";
    this.skey = "H2jk9uKnhRmL6WPwh89zBezWvr";
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
      },
      headers: {
        "secret-key": this.skey;
      }
    });
    this.token = token.data.token;
    this.uid = token.data["user_id"];
    return this.token;
  }

  addToken(token) {
    this.token = token;
  }

  async upload(path) {
    var udata = await axios({
      url: this.root + '/uploads/url',
      method: 'POST',
      data: {"context":"android","file_types":["jpeg"]},
      headers: {
        "secret-key": this.skey,
	"authorization": "Bearer " + this.token
      }
    });
    var up_url = udata.data[0]["upload_url"];
    var data = new fd();
    var fields = udata.data[0].fields;
    for (key in fields) {
      data.append(key,fields[key]);
    }
    data.append("file", fs.createReadStream(path));
    await axios({
      url: up_url,
      method: 'POST',
      data: data,
      headers: data.getHeaders()
    });
  }
}
