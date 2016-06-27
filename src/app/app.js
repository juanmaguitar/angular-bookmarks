// Styles
import '../css/app.scss';

// JS App
import angular from 'angular';
import ngUiRoute from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import services from './services';
import categories from './categories';
import bookmarks from './bookmarks';

import routing from './routing.js';

angular.module('eggly', [
		ngAnimate,
		ngUiRoute,
		services,
		categories,
		bookmarks
	])
  .config( routing );
