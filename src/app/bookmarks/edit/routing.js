// import template from './edit.tpl.html';
// const controller = 'editController';
// const controllerAs = '$ctrl';

// function routing ($stateProvider) {
//   $stateProvider.state('eggly.categories.bookmarks.edit', {
//     url: '/categories/:category',
//     views: { '@eggly.categories.bookmarks': { controller, template, controllerAs } }
//   });
// }

// routing.$inject = ['$stateProvider'];

// export default routing;


// import template from './bookmarks.tpl.html';
// const controller =  'bookmarksController';
// const controllerAs = '$ctrl';


// --------------------------------------------------------

import template from './edit.tpl.html';
const controller = 'editController';
const controllerAs = '$ctrl';

function routing ($stateProvider) {
  $stateProvider
	  .state('eggly.bookmarks.edit', {
	    url: '/bookmarks/:bookmarkId/edit',
	    views: { 'bookmarks@': { controller, template, controllerAs } }
	  });
}

routing.$inject = ['$stateProvider'];

export default routing;
