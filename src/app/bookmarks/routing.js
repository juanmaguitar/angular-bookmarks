import template from './bookmarks.tpl.html';
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
