IntercomMeteor = {};

var _booted = false;

/**
 * Log a user into Intercom.
 * If no user options are specified, create a unique identifier for
 * the user and store it in local storage for when the user revisits.
 * @param options
 *        {String} [user_id] An identifier for the user.
 *        options.* Any other property sent will be used for tracking.
 */
IntercomMeteor.boot = function (options) {
  if (!window.Intercom) throw new Meteor.Error('Intercom javascript library has not been loaded.');
  if (!Meteor.settings.public.INTERCOM_APP_ID) throw new Meteor.Error('Must specify public.INTERCOM_APP_ID in meteor settings.');

  // If Intercom is already booted, do not try to boot another instance.
  if (_booted) return;

  options = options || {};
  options.app_id = Meteor.settings.public.INTERCOM_APP_ID;

  // If a user_id is not given in the options,
  // create a unique identifier and store it in local storage.
  if (!options.user_id) {
    var storedUserId = localStorage.getItem('support.intercom_id');

    var userId = storedUserId || Random.id();

    // If generated, store the random user id in local storage
    // to be used when the user revisits the site.
    if (!storedUserId) localStorage.setItem('support.intercom_id', userId);

    options.user_id = 'User:' + userId;
  }

  window.Intercom('boot', options);

  _booted = true;
};

/**
 * Shutdown the Intercom messenger.
 * This logs the current Intercom user out.
 */
IntercomMeteor.shutdown = function () {
  if (!window.Intercom) throw new Meteor.Error('Intercom javascript library has not been loaded.');

  window.Intercom('shutdown');

  _booted = false;
};

/**
 * Open the Intercom messenger.
 */
IntercomMeteor.open = function () {
  if (!window.Intercom) throw new Meteor.Error('Intercom javascript library has not been loaded.');
  if (!_booted) throw new Meteor.Error('Intercom has not been booted');

  window.Intercom('show');
};

/**
 * Open the Intercom messenger to a new message.
 */
IntercomMeteor.openNew = function () {
  if (!window.Intercom) throw new Meteor.Error('Intercom javascript library has not been loaded.');
  if (!_booted) throw new Meteor.Error('Intercom has not been booted');

  window.Intercom('showNewMessage');
};

/**
 * Close the Intercom messenger.
 */
IntercomMeteor.close = function () {
  if (!window.Intercom) throw new Meteor.Error('Intercom javascript library has not been loaded.');

  window.Intercom('hide');
};

/**
 * Determine if Intercom messenger is open.
 * @return {Boolean}
 */
IntercomMeteor.isOpen = function () {
  return $('#intercom-messenger').hasClass('intercom-messenger-active');
};
