import angular from 'angular';
import Bookmarks from './Bookmarks.js';

angular.module('eggly.models.categories', [])
	.service('bookmarks', Bookmarks );

export default 'eggly.models.categories';

