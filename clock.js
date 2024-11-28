function showTime() {
  setTimeout(showTime, 500);

  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var dayTime = 'AM';

  var elapsed = hour * 60 + minute;

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    dayTime = 'PM';
  }

  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;

  var time = hour + ':' + minute + ' ' + dayTime;
  document.getElementById('clock').innerText = time;

  var today = date.toLocaleDateString('en-US');
  document.getElementById('today').innerText = today;

  var minutes = 1440 - elapsed;
  document.getElementById('minutes').innerText = minutes + ' minutes left';

  var percent = Math.round((elapsed / 1440) * 100);
  document.getElementById('percent').innerText =
    'approx. ' + percent + ' % elapsed';
}

setTimeout(showTime, 1000);
