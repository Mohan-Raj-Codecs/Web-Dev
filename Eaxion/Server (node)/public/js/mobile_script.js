// Loader
window.onload = (event) => {
  document.getElementById("loader-wrapper").style.opacity = 0;
  document.getElementById("loader-wrapper").style.zIndex = -1000;

};
console.log("Clean :)");
// Loader END

// Clock
function updateTime() {
  const rawDate = new Date();

  var today = new Date();
  let target = new Date("September 17, 2022");

  let date_future = target.getTime();
  let date_now = today.getTime();
  var delta = Math.abs(date_future - date_now) / 1000;

  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  var seconds = delta % 60;


  const date = new Date(Math.ceil(rawDate.getTime() / 1e3) * 1e3 + this.mod);
  let h = days;
  let m = hours;
  let s = minutes;
  if (h <= 0 && m <= 0 && s <= 0) {
    document.getElementById("clock_beat").style.display = "none";
    return
  }
}
updateTime();
setInterval(updateTime, 5000);
// Clock END
