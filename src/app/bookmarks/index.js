import angular from 'angular';

import services from '../services';
import BookmarksController from './BookmarksController.js';

import editBookmarks from './edit';
import createBookmarks from './create';

import routing from './routing.js';

angular.module('eggly.bookmarks', [ services, editBookmarks, createBookmarks ])
	.controller('bookmarksController', BookmarksController )
	.config(routing);

export default 'eggly.bookmarks';

