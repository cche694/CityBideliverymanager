import React, { Component } from "react";
import { axios, deepClone, loadimg } from "../../ajax";
//test
class RegistUI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const obj = {
      city: "beijing",
      a: {
        b: {
          f: "sss",
        },
      },
      c: [1, 2, 3],
    };
    const obj1 = deepClone(obj);
    obj1.city = "shanghai";
    console.log(obj.city);
    axios({
      methods: "GET",
      url:
        "https://www.fastmock.site/mock/aa70f6d6e32fa7b4ce5fe84f7430e22f/management/api/list",
    }).then((res) => {
      console.log(res.code);
    });
    loadimg(
      "https://images-na.ssl-images-amazon.com/images/I/41Q3A716ebL._SY90_.jpg"
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return <div>regist</div>;
  }
}

export default RegistUI;
