import { test } from 'qunit';
import moduleForAcceptance from 'wedding/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | welcome page');

test('should redirect to the welcome route', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/home', 'should redirect automatically');
  });
});

test('it should show a welcome message', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.welcome-message').length, 1);
  });
});

// test('it should show contact info', function(assert) {
//   visit('/');
//   andThen(function() {
//     assert.equal(find('.contact-info').length, 1);
//     assert.equal(find('.contact-info .facebook').length, 2);
//     assert.equal(find('.contact-info .phone').length, 2);
//     assert.equal(find('.contact-info .email').length, 2);
//   });
// });
