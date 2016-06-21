import template from './edit.tpl.html';
const controller = 'editController';

function routing ($stateProvider) {
  $stateProvider.state('eggly.categories.bookmarks.edit', {
    url: 'categories/:category',
    views: { '@eggly.categories.bookmarks': { controller, template } }
  });
}

routing.$inject = ['$stateProvider'];

export default routing;