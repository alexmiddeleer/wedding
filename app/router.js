// jscs:disable disallowDirectPropertyAccess
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('not-found', { path: '/*path' });
  this.route('directions');
  this.route('things-to-see');
  this.route('places-to-stay');
  this.route('bio');
  this.route('registry');
  this.route('event-info');
  this.route('test');
  this.route('photo-carousel');
});

export default Router;
