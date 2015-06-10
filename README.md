Meteor Intercom
==============

A meteor package for using Intercom.

##Usage
`meteor add dispatch:intercom`

You must also include [Intercom's Javascript Library](http://docs.intercom.io/install-on-your-web-product/use-javascript-to-install-intercom-on-any-web-app).

Add your Intercom app id to your settings file.

```
{
  "public": {
    "INTERCOM_APP_ID": "XXX"
  }
}

```

```
// Log a user into Intercom.
// If no user options are specified, create a unique identifier for
// the user and store it in local storage for when the user revisits.
IntercomMeteor.boot();

// Shutdown the Intercom messenger.
IntercomMeteor.shutdown();

// Open the Intercom messenger.
IntercomMeteor.open();

// Open the Intercom messenger to a new message.
IntercomMeteor.openNewMessage();

// Close the Intercom messenger.
IntercomMeteor.close();

// Determine if Intercom messenger is open.
IntercomMeteor.isOpen();
```
