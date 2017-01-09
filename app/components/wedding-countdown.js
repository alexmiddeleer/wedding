import Ember from 'ember';

const { Component, computed: { readOnly }, inject } = Ember;

export default Component.extend({
  tagName: 'span',
  helper: inject.service('wedding-countdown-helper'),
  daysLeft: readOnly('helper.daysLeft'),
  hoursLeft: readOnly('helper.hoursLeft'),
  minutesLeft: readOnly('helper.minutesLeft'),
  secondsLeft: readOnly('helper.secondsLeft')
});
