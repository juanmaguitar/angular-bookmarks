import categoriesTpl from './categories/categories.tpl.html';
const categoriesCtrl = 'categoriesController';

import bookmarksTpl from './bookmarks/bookmarks.tpl.html';
const bookmarksCtrl =  'bookmarksController';

const url = '/';
const abstract = true;

function routing ( $stateProvider, $urlRouterProvider ) {
	$stateProvider
		.state('eggly', {
			url,
			views: {
				'categories': {
					controller: categoriesCtrl,
					template: categoriesTpl,
					controllerAs: '$ctrl'
				},
				'bookmarks': {
					controller: bookmarksCtrl,
					template: bookmarksTpl,
					controllerAs: '$ctrl'
				}
			}
		});

	$urlRouterProvider.otherwise('/');
};

routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default routing;
