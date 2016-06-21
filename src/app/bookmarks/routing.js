import template from './bookmarks.tpl.html';
import controller from './BookmarksController.js';

function routing ($stateProvider) {
  $stateProvider.state('eggly.categories.bookmarks', {
    url: 'categories/:category',
    views: { 'bookmarks@': { controller, template } }
  });
}


routing.$inject = ['$stateProvider'];

export default routing;