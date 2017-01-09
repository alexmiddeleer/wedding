import Ember from 'ember';
const { Component, set } = Ember;

export default Component.extend({
  classNames: ['fine-print', 'credit'],
  didInsertElement() {
    set(this, 'year', (new Date().getFullYear()));
  }
});
