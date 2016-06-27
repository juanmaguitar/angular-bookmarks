import angular from 'angular';

import services from '../services';
import CategoriesController from './CategoriesController.js';

angular.module('eggly.categories', [ services ])
	.controller('categoriesController', CategoriesController )

export default 'eggly.categories';

