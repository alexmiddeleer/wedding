import Ember from 'ember';
const { Component, set } = Ember;

export default Component.extend({
  classNames: ['fine-print', 'credit'],
  year: new Date().getFullYear()
});
