[![Build Status](https://travis-ci.org/linagora/angular-clockpicker.svg?branch=master)](https://travis-ci.org/linagora/angular-clockpicker)

angular-clockpicker
===================

This library use clockpicker and exposes a directive to use it.
We do not use the clockpicker of [weareoutman](https://github.com/weareoutman/clockpicker) becauseit does not handle correctly twelvehour format and it is not supported.
In order to correct this bug, we create a [fork](https://github.com/linagora/clockpicker) on linagora github.

Usage
=====

You can take a look at the index.html and app.js in the example folder. But to use angular-clockpicker, you just need to add the attribute clockpicker-wrapper on a input field. This one will be made read-only on mobile device in order to avoir the virtual keyboard to popup when a user touch the field.
You can specify option of clock-picker documented [here](http://weareoutman.github.io/clockpicker/) by using the clockpicker-options attribute.

    <input type='text' data-ng-model='test' data-lng-clockpicker></input>

Changelog
=========

1.0.0

* Renaming clockpicker-wrapper directive into lng-clockpicker
