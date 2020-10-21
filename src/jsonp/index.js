import jsonP from "jsonp";
export default class JsonP_ {
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
            reject(response.message);
          }
        }
      );
    });
  }
}
