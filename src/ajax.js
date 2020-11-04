export function axios(options) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options.methods, options.url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject();
        }
      }
    };
    options.data ? xhr.send(JSON.stringify(options.data)) : xhr.send(null);
  });
}
export function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      result[k] = deepClone(obj[k]);
    }
  }
  return result;
}
export function loadimg(url) {
  return new Promise((resolve, reject) => {
    let img = document.createElement("img");
    img.src = url;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(`loading error`);
    };
  });
}
