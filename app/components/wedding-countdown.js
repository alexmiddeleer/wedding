import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Component, set, get } = Ember;

const dateOfWedding = new Date('2017-10-28:17:00');

export default Component.extend({
  tagName: 'span',
  startCountdown: task(function*() {
    let dateNow = new Date();
    if (dateNow > dateOfWedding) {
      yield set(this, 'daysLeft', 0);
      yield set(this, 'hoursLeft', 0);
      yield set(this, 'minutesLeft', 0);
      yield set(this, 'secondsLeft', 0);
    } else {
      let days = (dateOfWedding - dateNow) / 1000 / 60 / 60 / 24;
      let hours = (days % 1) * 24;
      let minutes = (hours % 1) * 60;
      let seconds = (minutes % 1) * 60;
      yield set(this, 'daysLeft', Math.floor(days));
      yield set(this, 'hoursLeft', Math.floor(hours));
      yield set(this, 'minutesLeft', Math.floor(minutes));
      yield set(this, 'secondsLeft', Math.floor(seconds));
      yield setTimeout(() => get(this, 'startCountdown').perform(), 1000);
    }
  }),

  didInsertElement() {
    get(this, 'startCountdown').perform();
  }
});
