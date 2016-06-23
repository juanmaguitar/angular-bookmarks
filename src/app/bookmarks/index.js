import angular from 'angular';

import services from '../services';
import BookmarksController from './BookmarksController.js';

import editBookmarks from './edit';
import createBookmarks from './create';

angular.module('eggly.bookmarks', [ services, editBookmarks, createBookmarks ])
	.controller('bookmarksController', BookmarksController )

export default 'eggly.bookmarks';

