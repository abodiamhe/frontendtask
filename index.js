const currentDay = new Date().toLocaleString("en", { weekday: "long" });

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
const currentTimeUTC = () => {
  const d = new Date();
  let h = addZero(d.getUTCHours());
  let m = addZero(d.getUTCMinutes());
  let s = addZero(d.getUTCSeconds());
  let time = h + ":" + m + ":" + s;
  document.getElementById("live-clock").innerHTML = time;
};

setInterval(() => {
  currentTimeUTC();
}, 1000);

document.getElementById("user-day").innerHTML = currentDay;
document.getElementById("span").innerHTML = new Date().getFullYear();
