const refs = {
  
  days: document.querySelector('span[data-value=days]'),
  hours: document.querySelector('span[data-value=hours]'),
  minutes: document.querySelector('span[data-value=mins]'),
  seconds: document.querySelector('span[data-value=secs]'),
}


class CountdownTimer {
  constructor ({targetDate, selector}) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  
  init() {
    this.selector = setInterval(()=> {
      const time = this.targetDate - new Date();
      if (time <= 0) {
        clearInterval(this.selector);
      }
      const { days, hours, mins, secs } = this.getTimeValue(time);
      this.updateTimerView(this.getTimeValue(time));
      console.log(`${days} дней ${hours}:${mins}:${secs}`);
    },1000)}
    
    updateTimerView({ days, hours, mins, secs }) {
      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.minutes.textContent = mins;
      refs.seconds.textContent = secs;
    }
    
    getTimeValue(time) {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      
      return { days, hours, mins, secs };
  }
  
  pad(value) {
    return String(value).padStart(2, '0')
  };

}

const countdownTimer = new CountdownTimer(
  {
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2022'),
  }
  );
  
  countdownTimer.init()
    