import jsonP from "jsonp";
import axios from "axios";
import { message, Button, Space } from "antd";
export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      jsonP(
        options.url,
        {
          param: "callback",
        },
        function (err, response) {
          if (response.status == "success") {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  }
  static ajax(options) {
    let baseApi =
      "https://www.fastmock.site/mock/aa70f6d6e32fa7b4ce5fe84f7430e22f/management";
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        methods: options.methods || "get",
        baseURL: baseApi,
        timeout: 5000,
        params: options.data.params || "",
      }).then((res) => {
        if (res.status === 200) {
          if (res.data.code == 0) {
            resolve(res.data.result);
          } else {
            message.error(res.data.message);
          }
        } else {
          reject(res.data);
        }
      });
    });
  }
}
