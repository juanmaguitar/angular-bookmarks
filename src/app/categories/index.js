import angular from 'angular';

import services from '../services';
import CategoriesController from './CategoriesController.js';

import routing from './routing.js';

angular.module('eggly.categories', [ services ])
	.controller('categoriesController', CategoriesController )
	.config(routing);

export default 'eggly.categories';

