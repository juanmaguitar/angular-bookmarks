// import bookmarksTpl from '../bookmarks/bookmarks.tpl.html';
// const bookmarksCtrl =  'bookmarksController';

// function routing ($stateProvider) {
// 	$stateProvider
// 		.state('eggly.bookmarks', {
// 			url: '/',
// 			views: {
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




import template from './bookmarks.tpl.html';
const controller =  'bookmarksController';
const controllerAs = '$ctrl';

function routing ($stateProvider) {
  $stateProvider
	  .state('eggly.bookmarks.edit', {
	    url: '/bookmarks/:bookmarkId/edit',
	    views: { 'bookmarks@action': { controller, template, controllerAs } }
	  });
}

routing.$inject = ['$stateProvider'];

export default routing;
