// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/app.scss';

// JS App
import angular from 'angular';
import ngUiRoute from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import bookmarks from './bookmarks';
import services from './services';

import bookmarksEdit from './bookmarks/edit';
import bookmarksCreate from './bookmarks/create';

import routing from './routing.js';

angular.module('Eggly', [
		ngAnimate,
		ngUiRoute,
		services,
		bookmarks,
		bookmarksEdit,
		bookmarksCreate
	])
  .config( routing );