import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  classNames: ['fine-print', 'credit'],
  year: new Date().getFullYear()
});
