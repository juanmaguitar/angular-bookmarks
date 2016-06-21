import angular from 'angular';

import CategoriesService from './CategoriesService.js';
import BookmarksService from './BookmarksService.js';

angular.module('eggly.services', [])
	.service('bookmarksService', BookmarksService )
	.service('categoriesService', CategoriesService );

export default 'eggly.services';

