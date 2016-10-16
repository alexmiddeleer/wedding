import Ember from 'ember';
const { Component, computed, get } = Ember;
const facebookBaseURI = 'https://www.facebook.com/';

export default Component.extend({
  classNames: ['facebook-link'],
  facebookId: '',
  name: '',
  facebookLink: computed('fb-id', function() {
    return `${facebookBaseURI}${get(this, 'facebookId')}`;
  })
});
