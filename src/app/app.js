// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/app.scss';

// JS App
import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';

import categories from './categories/categories.js';
import bookmarks from './categories/bookmarks/bookmarks.js';

import routing from './app.config.js';

angular.module('Eggly', [ ngAnimate, ngRoute, categories, bookmarks ])
  .config( routing );