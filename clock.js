function showTime() {
  setTimeout(showTime, 500);

  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var dayTime = 'AM';

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    dayTime = 'PM';
  }

  hour = (hour < 10) ? '0' + hour : hour;
  minute = (minute < 10) ? '0' + minute : minute;

  var time = hour + ':' + minute + ' ' + dayTime;
  document.getElementById('clock').innerText = time;
}

showTime();
