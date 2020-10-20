export default {
  fromateDate(time) {
    if(!time) return ""
    let date = new Date(time);
    let dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return dateString
  },
};
