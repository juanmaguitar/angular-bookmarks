import template from './edit.tpl.html';
const controller = 'editController';
const controllerAs = '$ctrl';

function routing ($stateProvider) {
  $stateProvider
	  .state('eggly.bookmarks.edit', {
	    url: '/bookmarks/:bookmarkId/edit',
	    views: { '@eggly.bookmarks': { controller, template, controllerAs } }
	  });
}

routing.$inject = ['$stateProvider'];

export default routing;
