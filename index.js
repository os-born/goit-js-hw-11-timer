const refs = {
  
  days: document.querySelector('span[data-value=days]'),
  hours: document.querySelector('span[data-value=hours]'),
  minutes: document.querySelector('span[data-value=mins]'),
  seconds: document.querySelector('span[data-value=secs]'),
}


class CountdownTimer {
  constructor ({onTick}) {
    this.selector = null;
    this.targetDate = null;
    this.onTick = onTick;
  }

  init() {
    this.selector = setInterval(()=> {
    this.targetDate = new Date('2021,9,1');
    const currentTime = new Date();
      
    const time = this.targetDate - currentTime;
    if (time <= 0) {
      clearInterval(this.selector);
    }
    const { days, hours, mins, secs } = getTimeValue(time);
    updateTimerView(getTimeValue(time));
    console.log(`${days} дней ${hours}:${mins}:${secs}`);
  },1000)}

}

const countdownTimer = new CountdownTimer(
  {
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
  }
);

countdownTimer.init();

function updateTimerView({ days, hours, mins, secs }) {
  refs.days.textContent = pad(days);
  refs.hours.textContent = pad(hours);
  refs.minutes.textContent = pad(mins);
  refs.seconds.textContent = pad(secs);
}


function getTimeValue(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, '0')
}