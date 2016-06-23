// import template from './edit.tpl.html';
// const controller = 'editController';
// const controllerAs = '$ctrl';

import template from '../bookmarks/bookmarks.tpl.html';
const controller =  'bookmarksController';
const controllerAs = '$ctrl';

function routing ($stateProvider) {
  $stateProvider.state('eggly.bookmarks', {
    url: 'categories/:category',
    views: { 'bookmarks@': { controller, template, controllerAs } }
  });
}

routing.$inject = ['$stateProvider'];

export default routing;

// ----------------------------------------------------------------------

// import categoriesTpl from './categories.tpl.html';
// const categoriesCtrl = 'categoriesController';

// function routing ($stateProvider) {
// 	$stateProvider
// 		.state('eggly.categories', {
// 			url: '/',
// 			views: {
// 				'categories@': {
// 					controller: categoriesCtrl,
// 					template: categoriesTpl,
// 					controllerAs: '$ctrl'
// 				}
// 			}
// 		});
// }

// routing.$inject = ['$stateProvider'];

// export default routing;

// ----------------------------------------------------------------------

// import categoriesTpl from './categories.tpl.html';
// const categoriesCtrl = 'categoriesController';

// import bookmarksTpl from '../bookmarks/bookmarks.tpl.html';
// const bookmarksCtrl =  'bookmarksController';

// function routing ($stateProvider) {
// 	$stateProvider
// 		.state('eggly.categories', {
// 			url: '/',
// 			views: {
// 				'categories@': {
// 					controller: categoriesCtrl,
// 					template: categoriesTpl,
// 					controllerAs: '$ctrl'
// 				},
// 				'bookmarks@': {
// 					controller: bookmarksCtrl,
// 					template: bookmarksTpl,
// 					controllerAs: '$ctrl'
// 				}
// 			}
// 		});
// }

// routing.$inject = ['$stateProvider'];

// export default routing;


