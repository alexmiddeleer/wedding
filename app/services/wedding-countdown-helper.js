import Ember from 'ember';

const { Service, set, get } = Ember;
const dateOfWedding = new Date('2017-10-28:17:00');

export default Service.extend({
  daysLeft: 0,
  hoursLeft: 0,
  minutesLeft: 0,
  secondsLeft: 0,

  reCalc() {
    let dateNow = new Date();
    if (dateNow > dateOfWedding) {
      set(this, 'daysLeft', 0);
      set(this, 'hoursLeft', 0);
      set(this, 'minutesLeft', 0);
      set(this, 'secondsLeft', 0);
    } else {
      let days = (dateOfWedding - dateNow) / 1000 / 60 / 60 / 24;
      let hours = (days % 1) * 24;
      let minutes = (hours % 1) * 60;
      let seconds = (minutes % 1) * 60;
      set(this, 'daysLeft', Math.floor(days));
      set(this, 'hoursLeft', Math.floor(hours));
      set(this, 'minutesLeft', Math.floor(minutes));
      set(this, 'secondsLeft', Math.floor(seconds));
      setTimeout(() => get(this, 'reCalc').call(this), 1000);
    }
  },

  init() {
    get(this, 'reCalc').call(this);
  }
});
