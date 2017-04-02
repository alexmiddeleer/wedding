import Ember from 'ember';
import { task } from 'ember-concurrency';

const { set, get, computed, Component, RSVP: { defer } } = Ember;

const PHOTOS_DIR = 'images/carousel';

const DELAY_MS = 5000;

const PHOTOS = [
  '2008_4_Museum of Natural History.jpg',
  '2008_9_Vassar.jpg',
  '2009_12_EP Birthday.jpg',
  '2010_12_Christmas.jpg',
  '2010_5_Bronx Zoo.jpg',
  '2010_5_Charleston Aquarium.jpg',
  '2010_5_Middleton Place.JPG',
  '2010_9_Vassar Convocation.jpg',
  '2011_12_EP Birthday.jpg',
  '2011_7_Bronx Zoo.jpg',
  '2013_5_Tufts Graduation.jpg',
  '2013_5_Versailles.jpg',
  '2015_5_Acadia National Park.jpg',
  '2015_8_Block Island.jpg',
  '2015_9_Charleston Aquarium.jpg',
  '2016_10_San Francisco.jpg',
  '2016_7_Block Island.jpg',
  'alex-elizabeth-vassar.jpg',
  '2016_9_Napa.jpg'
];

export default Component.extend({
  classNames: ['photo-carousel'],
  imgIdx: -1,

  imgSrc: computed('imgIdx', function() {
    return `${PHOTOS_DIR}/${PHOTOS[get(this, 'imgIdx')]}`;
  }),

  carouselDelay() {
    let deferred = defer();
    setTimeout(() => deferred.resolve(), DELAY_MS);
    return deferred.promise;
  },

  nextImageHelper: task(function*(incr) {
    let newIdx = (get(this, 'imgIdx') + incr) % PHOTOS.length;
    newIdx = newIdx < 0 ? PHOTOS.length - 1 : newIdx;
    set(this, 'imgIdx', newIdx);
    return yield get(this, 'carouselDelay')();
  }).restartable(),

  nextImage: task(function*(incr = 1) {
    yield get(this, 'nextImageHelper').perform(incr);
    get(this, 'nextImage').perform();
  }),

  didInsertElement() {
    get(this, 'nextImage').perform();
  },

  actions: {
    next() {
      get(this, 'nextImage').perform();
    },

    previous() {
      get(this, 'nextImage').perform(-1);
    }
  }
});
